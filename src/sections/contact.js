import { github, linkedIn, mail } from "../assets/icons/icons";
import config, { UI_CONFIG } from "../config";
import { ResponseStatus, submitContactForm } from "../services/contactService";
import {
  alertBadge,
  createHtmlElement,
  createSvgIcon,
  renderSubTitle,
  renderTitle,
} from "../utils/utils";
import { options } from "../utils/variable";

// User-friendly error message function
function showUserFriendlyError(
  message,
  button,
  btnText,
  btnIcon,
  error = null,
) {
  // Log error for debugging
  console.error("Form submission error:", message, error);

  // Send to error tracking service if available
  if (window.Sentry && error) {
    window.Sentry.captureException(error, {
      tags: {
        component: "contact-form",
        action: "form-submission",
      },
      extra: {
        errorMessage: message,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      },
    });
  }

  // Show user-friendly alert
  alertBadge(message, "red");

  // Update button state
  button.classList.add("error");
  btnText.textContent = UI_CONFIG.buttonText.error;
  btnIcon.textContent = UI_CONFIG.buttonIcons.error;

  // Reset button after delay
  setTimeout(() => {
    button.classList.remove("error");
    btnText.textContent = UI_CONFIG.buttonText.default;
    btnIcon.textContent = UI_CONFIG.buttonIcons.default;
  }, UI_CONFIG.timing.errorResetDelay);
}

export default function contactSection() {
  const hero = createHtmlElement("section", {
    class: "hero",
    id: "contact",
    style: "display:none",
  });

  // Left side content
  const heroContents = createHtmlElement("div", {
    class: "hero__content",
  });

  const mainHeader = createHtmlElement("h1", { class: "main__title" });
  const titles = ["Let’s Build", " Your Next Project!"];
  renderTitle(titles, mainHeader);

  const text = `I help turn ideas and designs into modern, high-quality web experiences. Let’s build something great together.
`;
  const paragraph = renderSubTitle(text, "sub__title");

  const socialIcons = renderSvgIcon();

  // Right side image
  const heroImage = createHtmlElement("div", { class: "hero__img" });

  const formContact = contactForm();
  heroImage.append(formContact);

  heroContents.append(mainHeader, paragraph, socialIcons);
  hero.append(heroContents, heroImage);

  formContact
    .querySelector("#contact-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const form = e.target;
      const inputs = form.querySelectorAll(".form__control");
      const submitBtn = form.querySelector(".btn__submit");
      let isValid = true;

      // Validate all fields
      inputs.forEach((input) => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Show loading state
        submitBtn.classList.add("loading");
        submitBtn.disabled = true;

        submitForm(form).finally(() => {
          // Reset button state
          submitBtn.classList.remove("loading");
          submitBtn.disabled = false;
        });
      } else {
        // Shake form on validation error
        form.classList.add("shake");
        setTimeout(
          () => form.classList.remove("shake"),
          UI_CONFIG.timing.shakeAnimationDuration,
        );

        // Focus first invalid field
        const firstError = form.querySelector(
          ".input-wrapper.error input, .input-wrapper.error textarea",
        );
        if (firstError) {
          firstError.focus();
        }
      }
    });

  return hero;
}

/**
 * Handles successful form submission UI updates
 */
function handleSubmitSuccess(form, button, btnText, btnIcon, message) {
  button.classList.add("success");
  btnText.textContent = UI_CONFIG.buttonText.success;
  btnIcon.textContent = UI_CONFIG.buttonIcons.success;

  alertBadge(message, "green");

  // Reset form with animation
  setTimeout(() => {
    form.classList.add("success-submitted");
    form.reset();

    // Reset character counter
    const charCount = form.querySelector("#char-count");
    if (charCount) charCount.textContent = "0";
  }, UI_CONFIG.timing.formResetDelay);

  // Reset button after delay
  setTimeout(() => {
    button.classList.remove("success");
    btnText.textContent = UI_CONFIG.buttonText.default;
    btnIcon.textContent = UI_CONFIG.buttonIcons.default;
    form.classList.remove("success-submitted");
  }, UI_CONFIG.timing.buttonResetDelay);
}

/**
 * Handles form submission errors with UI feedback
 */
function handleSubmitError(result, button, btnText, btnIcon) {
  // Show main error message
  showUserFriendlyError(result.message, button, btnText, btnIcon);

  // Show individual validation/server errors if present
  if (result.errors && result.errors.length > 0) {
    result.errors.forEach((error) => {
      if (error.message && error.message !== result.message) {
        alertBadge(error.message, "red");
      }
    });
  }
}

/**
 * Enhanced form submission using contactService
 * Separates API logic from UI concerns
 */
async function submitForm(form) {
  const formData = new FormData(form);
  const button = form.querySelector(".btn__submit");
  const btnText = button.querySelector(".btn-text");
  const btnIcon = button.querySelector(".btn-icon");

  // Use the contact service for API call
  const result = await submitContactForm(formData, {
    endpoint: form.action,
  });

  if (result.success) {
    handleSubmitSuccess(form, button, btnText, btnIcon, result.message);
  } else {
    handleSubmitError(result, button, btnText, btnIcon);

    // Special handling for validation errors - highlight fields
    if (result.status === ResponseStatus.VALIDATION_ERROR) {
      result.errors.forEach((error) => {
        if (error.field) {
          const input = form.querySelector(`#${error.field}`);
          if (input) {
            input.setAttribute("aria-invalid", "true");
            const wrapper = input.closest(".input-wrapper");
            if (wrapper) wrapper.classList.add("error");
          }
        }
      });
    }
  }

  return result;
}

function renderSvgIcon() {
  const socialIconContainer = createHtmlElement("div", {
    class: "social-icons",
    role: "list",
    "aria-label": "Social media links",
  });

  /**
   * Creates an accessible icon link with proper ARIA attributes
   */
  function createIconLink(svgIcon, link, ariaLabel) {
    const iconLink = createHtmlElement("a", {
      class: "icon",
      href: `${link}`,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": ariaLabel,
      role: "listitem",
    });

    createSvgIcon(svgIcon, options, iconLink);
    return iconLink;
  }

  const gitIcon = createIconLink(
    github,
    config.social.github,
    "Visit my GitHub profile (opens in new tab)",
  );
  const linkedInIcon = createIconLink(
    linkedIn,
    config.social.linkedin,
    "Connect with me on LinkedIn (opens in new tab)",
  );
  const mailIcon = createIconLink(
    mail,
    `mailto:${config.contact.email}`,
    "Send me an email",
  );

  socialIconContainer.append(gitIcon, linkedInIcon, mailIcon);

  return socialIconContainer;
}

// Helper function to create form fields with enhanced accessibility
function createFormField(fieldConfig) {
  const {
    id,
    name,
    type = "text",
    label,
    icon,
    placeholder,
    required = true,
    textarea = false,
    rows = 2,
  } = fieldConfig;

  const field = createHtmlElement("div", { class: "form__field" });

  const labelElement = createHtmlElement("label", {
    for: id,
    class: "form__label",
  });
  labelElement.innerHTML = `
    <span class="label-icon" aria-hidden="true">${icon}</span>
    <span class="label-text">${label}</span>
    ${required ? '<span class="sr-only">(required)</span>' : ""}
  `;

  const inputWrapper = createHtmlElement("div", { class: "input-wrapper" });

  // Common accessibility attributes
  const accessibilityAttrs = {
    "aria-describedby": `${id}-error`,
    "aria-invalid": "false",
    "aria-required": required ? "true" : "false",
  };

  let input;
  if (textarea) {
    input = createHtmlElement("textarea", {
      class: "form__control",
      id,
      name,
      rows,
      required,
      placeholder,
      ...accessibilityAttrs,
    });
  } else {
    input = createHtmlElement("input", {
      type,
      class: "form__control",
      id,
      name,
      required,
      placeholder,
      ...accessibilityAttrs,
      // Add autocomplete hints for better UX
      autocomplete: getAutocompleteValue(type, name),
    });
  }

  const border = createHtmlElement("div", { class: "input-border" });
  inputWrapper.append(input, border);

  const errorElement = createHtmlElement("div", {
    class: "field-error",
    id: `${id}-error`,
    role: "alert",
    "aria-live": "polite",
  });

  field.append(labelElement, inputWrapper, errorElement);
  return field;
}

/**
 * Returns appropriate autocomplete value based on field type/name
 */
function getAutocompleteValue(type, name) {
  const autocompleteMap = {
    email: "email",
    name: "name",
    tel: "tel",
  };
  return autocompleteMap[type] || autocompleteMap[name] || "off";
}

function contactForm() {
  const formContainer = createHtmlElement("div", {
    class: "form__container enhanced-form",
  });

  // Create form header
  const formHeader = createHtmlElement("div", { class: "form__header" });
  formHeader.innerHTML = `
    <h3 class="form__title">Let's Connect</h3>
    <p class="form__subtitle">Tell me about your project and I’ll get back to you as soon as possible.</p>
  `;

  // Create form element
  const form = createHtmlElement("form", {
    id: "contact-form",
    autocomplete: "off",
    action: config.formspree,
    method: "POST",
    class: "enhanced-contact-form",
  });

  // Create form fields using helper function
  const nameField = createFormField({
    id: "name",
    name: "name",
    type: "text",
    label: "Full Name",
    icon: "👤",
    placeholder: "Enter your full name",
  });

  const emailField = createFormField({
    id: "email",
    name: "email",
    type: "email",
    label: "Email Address",
    icon: "📩",
    placeholder: "Enter your email address",
  });

  const subjectField = createFormField({
    id: "subject",
    name: "subject",
    type: "text",
    label: "Project Subject",
    icon: "💡",
    placeholder: "Enter project subject",
  });

  const messageField = createFormField({
    id: "message",
    name: "message",
    label: "Tell me about your project...",
    icon: "💬",
    placeholder: "Describe your project in detail",
    textarea: true,
    rows: 2,
  });

  // Create form actions
  const formActions = createHtmlElement("div", { class: "form__actions" });
  const submitBtn = createHtmlElement("button", {
    class: "btn__submit",
    type: "submit",
  });
  submitBtn.innerHTML = `
    <span class="btn-text">Send Message</span>
    <span class="btn-icon">🚀</span>
    <div class="btn-loading">
      <div class="loading-spinner"></div>
    </div>
  `;

  const privacyNotice = createHtmlElement("div", { class: "form__privacy" });
  const smallText = createHtmlElement(
    "small",
    {},
    "🔒 Your information is secure and will never be shared.",
  );
  privacyNotice.appendChild(smallText);

  formActions.append(submitBtn, privacyNotice);

  // Add character count to message field
  const messageInputWrapper = messageField.querySelector(".input-wrapper");
  messageInputWrapper.classList.add("textarea-wrapper");
  const charCount = createHtmlElement("div", { class: "character-count" });
  const charCountSpan = createHtmlElement("span", { id: "char-count" }, "0");
  charCount.append(charCountSpan, "/500");
  messageInputWrapper.append(charCount);

  // Group name and email in a row
  const formRow = createHtmlElement("div", { class: "form__row" });
  formRow.append(nameField, emailField);

  // Append all fields to form
  form.append(formRow, subjectField, messageField, formActions);

  // Add enhanced interactions
  addFormInteractions(form);

  formContainer.append(formHeader, form);
  return formContainer;
}

function addFormInteractions(form) {
  const inputs = form.querySelectorAll(".form__control");
  const messageInput = form.querySelector("#message");
  const charCount = form.querySelector("#char-count");

  // Setup input event listeners
  inputs.forEach((input) => {
    const wrapper = input.closest(".input-wrapper");

    // Focus and blur effects
    input.addEventListener("focus", () => wrapper.classList.add("focused"));
    input.addEventListener("blur", () => wrapper.classList.remove("focused"));

    // Real-time validation
    input.addEventListener("input", () => validateField(input));
  });

  // Character counter for message
  if (messageInput && charCount) {
    messageInput.addEventListener("input", () => {
      const count = messageInput.value.length;
      charCount.textContent = count;

      const countWrapper = charCount.parentElement;
      if (count > 500) {
        countWrapper.classList.add("over-limit");
        messageInput.value = messageInput.value.substring(0, 500);
        charCount.textContent = 500;
      } else {
        countWrapper.classList.remove("over-limit");
      }
    });
  }
}

// Validation rules configuration
const VALIDATION_RULES = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  message: {
    minLength: 10,
    message: "Message should be at least 10 characters long",
  },
};

function validateField(input) {
  const errorElement = document.getElementById(`${input.id}-error`);
  const wrapper = input.closest(".input-wrapper");
  let isValid = true;
  let errorMessage = "";

  // Clear previous errors
  wrapper.classList.remove("error");
  if (errorElement) errorElement.textContent = "";

  // Check if field is required and empty
  if (input.required && !input.value.trim()) {
    isValid = false;
    errorMessage = `${input.name} is required`;
  }
  // Check specific validation rules
  else if (VALIDATION_RULES[input.type] && input.value.trim()) {
    const rule = VALIDATION_RULES[input.type];
    if (!rule.pattern.test(input.value)) {
      isValid = false;
      errorMessage = rule.message;
    }
  }
  // Check minimum length for message
  else if (
    input.id === "message" &&
    input.value.trim() &&
    input.value.length < VALIDATION_RULES.message.minLength
  ) {
    isValid = false;
    errorMessage = VALIDATION_RULES.message.message;
  }

  // Update accessibility attributes based on validation state
  input.setAttribute("aria-invalid", isValid ? "false" : "true");

  // Show error if invalid
  if (!isValid) {
    wrapper.classList.add("error");
    if (errorElement) errorElement.textContent = errorMessage;
  }

  return isValid;
}
