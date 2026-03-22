/**
 * Contact Service
 * Handles all contact form API operations with proper error handling
 * and consistent response objects.
 *
 * @module contactService
 */

import config from "../config";

// Constants
const REQUEST_TIMEOUT_MS = 30000; // 30 seconds
const DEFAULT_HEADERS = {
  Accept: "application/json",
};

/**
 * Response status enum for consistent response handling
 */
export const ResponseStatus = {
  SUCCESS: "success",
  ERROR: "error",
  TIMEOUT: "timeout",
  NETWORK_ERROR: "network_error",
  VALIDATION_ERROR: "validation_error",
};

/**
 * Creates a standardized response object
 * @param {string} status - Response status from ResponseStatus enum
 * @param {Object|null} data - Response data
 * @param {string|null} message - Human-readable message
 * @param {Array} errors - Array of error objects
 * @returns {Object} Standardized response object
 */
function createResponse(status, data = null, message = null, errors = []) {
  return {
    status,
    success: status === ResponseStatus.SUCCESS,
    data,
    message,
    errors,
    timestamp: new Date().toISOString(),
  };
}

/**
 * Parses error response from server
 * @param {Response} response - Fetch Response object
 * @returns {Promise<Array>} Array of error objects
 */
async function parseErrorResponse(response) {
  try {
    const data = await response.json();
    if (data.errors && Array.isArray(data.errors)) {
      return data.errors;
    }
    return [{ message: data.message || "Unknown server error" }];
  } catch {
    return [{ message: "Unable to parse server response" }];
  }
}

/**
 * Categorizes network errors into user-friendly messages
 * @param {Error} error - The caught error
 * @returns {Object} Object with error type and message
 */
function categorizeNetworkError(error) {
  if (error.name === "AbortError") {
    return {
      type: ResponseStatus.TIMEOUT,
      message: "Request timed out. Please check your connection and try again.",
    };
  }

  if (error.message.includes("Failed to fetch")) {
    return {
      type: ResponseStatus.NETWORK_ERROR,
      message:
        "Network connection error. Please check your internet connection.",
    };
  }

  if (error.message.includes("NetworkError")) {
    return {
      type: ResponseStatus.NETWORK_ERROR,
      message: "Network error. Please try again or contact me directly.",
    };
  }

  if (error.name === "TypeError" && error.message.includes("fetch")) {
    return {
      type: ResponseStatus.NETWORK_ERROR,
      message: "Unable to connect to the server. Please try again later.",
    };
  }

  return {
    type: ResponseStatus.ERROR,
    message: "Connection failed. Please try again.",
  };
}

/**
 * Validates contact form data before submission
 * @param {Object} formData - Form data object with name, email, message
 * @returns {Object} Validation result with isValid and errors array
 */
function validateFormData(formData) {
  const errors = [];

  if (!formData.name || !formData.name.trim()) {
    errors.push({ field: "name", message: "Name is required" });
  }

  if (!formData.email || !formData.email.trim()) {
    errors.push({ field: "email", message: "Email is required" });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.push({ field: "email", message: "Please enter a valid email" });
  }

  if (!formData.message || !formData.message.trim()) {
    errors.push({ field: "message", message: "Message is required" });
  } else if (formData.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "Message must be at least 10 characters",
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Extracts form data from FormData object into plain object
 * @param {FormData} formData - FormData instance
 * @returns {Object} Plain object with form fields
 */
function extractFormFields(formData) {
  return {
    name: formData.get("name") || "",
    email: formData.get("email") || "",
    message: formData.get("message") || "",
  };
}

/**
 * Submits contact form data to the backend service
 * @param {FormData|Object} formData - Form data (FormData instance or plain object)
 * @param {Object} options - Optional configuration
 * @param {string} options.endpoint - API endpoint (defaults to config.formspree)
 * @param {number} options.timeout - Request timeout in ms
 * @returns {Promise<Object>} Standardized response object
 */
export async function submitContactForm(formData, options = {}) {
  const endpoint = options.endpoint || config.formspree;
  const timeout = options.timeout || REQUEST_TIMEOUT_MS;

  // Handle both FormData and plain objects
  const fields =
    formData instanceof FormData ? extractFormFields(formData) : formData;

  // Validate form data
  const validation = validateFormData(fields);
  if (!validation.isValid) {
    return createResponse(
      ResponseStatus.VALIDATION_ERROR,
      null,
      "Please fix the form errors",
      validation.errors,
    );
  }

  // Prepare request body
  const body = formData instanceof FormData ? formData : JSON.stringify(fields);
  const headers =
    formData instanceof FormData
      ? DEFAULT_HEADERS
      : { ...DEFAULT_HEADERS, "Content-Type": "application/json" };

  // Setup abort controller for timeout
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body,
      headers,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      return createResponse(
        ResponseStatus.SUCCESS,
        { submitted: true },
        "Message sent successfully! I'll get back to you soon.",
      );
    }

    // Handle server errors
    const errors = await parseErrorResponse(response);
    return createResponse(
      ResponseStatus.ERROR,
      null,
      "Server error occurred. Please try again in a moment.",
      errors,
    );
  } catch (error) {
    clearTimeout(timeoutId);

    const { type, message } = categorizeNetworkError(error);

    // Log for debugging (only in development)
    if (config.isDevelopment) {
      console.error("Contact form submission error:", error);
    }

    return createResponse(type, null, message, [{ message: error.message }]);
  }
}

/**
 * Gets the contact email from configuration
 * @returns {string} Contact email address
 */
export function getContactEmail() {
  return config.contact?.email || "";
}

/**
 * Creates a mailto link with pre-filled subject
 * @param {Object} formData - Form data with name and message
 * @returns {string} Mailto URL
 */
export function createMailtoLink(formData = {}) {
  const email = getContactEmail();
  const subject = encodeURIComponent(
    `Contact from ${formData.name || "Portfolio Visitor"}`,
  );
  const body = encodeURIComponent(formData.message || "");

  return `mailto:${email}?subject=${subject}&body=${body}`;
}

// Export service object for alternative usage pattern
const contactService = {
  submitContactForm,
  getContactEmail,
  createMailtoLink,
  validateFormData,
  ResponseStatus,
};

export default contactService;

