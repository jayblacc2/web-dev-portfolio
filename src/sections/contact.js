import { github, linkedIn, mail } from "../images/svgIcons/icons";

import {
  createSvgIcon,
  renderTitle,
  renderSubTitle,
  alertBadge,
} from "../utils/utils";
import { createHtmlElement } from "../utils/utils";
import { options } from "../utils/variable";
import config from "../config";

// User-friendly error message function
function showUserFriendlyError(
  message,
  button,
  btnText,
  btnIcon,
  error = null
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
  btnText.textContent = "Try Again";
  btnIcon.textContent = "❌";

  // Reset button after delay
  setTimeout(() => {
    button.classList.remove("error");
    btnText.textContent = "Send Message";
    btnIcon.textContent = "🚀";
  }, 3000);
}

export default function contactSection() {
  const hero = createHtmlElement("section", {
    class: "hero",
    id: "contact",
    style: "display:none",
  });

  const contactContainer = createHtmlElement("div", {
    class: "contact__container",
  });

  // Left side of the section make as a function
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

  // Right side of the section: make as a function
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
        setTimeout(() => form.classList.remove("shake"), 600);

        // Focus first invalid field
        const firstError = form.querySelector(
          ".input-wrapper.error input, .input-wrapper.error textarea"
        );
        if (firstError) {
          firstError.focus();
        }
      }
    });

  return hero;
}

//Enhanced form submission with better UX
function submitForm(form) {
  const formData = new FormData(form);
  const button = form.querySelector(".btn__submit");
  const btnText = button.querySelector(".btn-text");
  const btnIcon = button.querySelector(".btn-icon");

  // Add timeout to prevent hanging requests
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

  return fetch(form.action, {
    method: form.method,
    body: formData,
    signal: controller.signal,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      // Clear timeout since request completed
      clearTimeout(timeoutId);

      if (response.ok) {
        // Success state
        button.classList.add("success");
        btnText.textContent = "Message Sent!";
        btnIcon.textContent = "✅";

        alertBadge(
          "Message sent successfully! I'll get back to you soon.",
          "green"
        );

        // Reset form with animation
        setTimeout(() => {
          form.classList.add("success-submitted");
          form.reset();

          // Reset character counter
          const charCount = form.querySelector("#char-count");
          if (charCount) charCount.textContent = "0";
        }, 1000);

        // Reset button after delay
        setTimeout(() => {
          button.classList.remove("success");
          btnText.textContent = "Send Message";
          btnIcon.textContent = "🚀";
          form.classList.remove("success-submitted");
        }, 4000);
      } else {
        // Server error state
        showUserFriendlyError(
          "Server error occurred. Please try again in a moment.",
          button,
          btnText,
          btnIcon
        );

        response
          .json()
          .then((data) => {
            if (data.errors && data.errors.length > 0) {
              // Show specific validation errors
              data.errors.forEach((error) => {
                alertBadge(error.message, "red");
              });
            }
          })
          .catch(() => {
            // If JSON parsing fails, show generic error
            alertBadge("Server response error. Please try again.", "red");
          });
      }
    })
    .catch((error) => {
      // Clear timeout since request failed
      clearTimeout(timeoutId);

      // Enhanced network error handling
      let errorMessage = "Connection failed. Please try again.";

      if (error.name === "AbortError") {
        errorMessage =
          "Request timed out. Please check your connection and try again.";
      } else if (error.message.includes("Failed to fetch")) {
        errorMessage =
          "Network connection error. Please check your internet connection.";
      } else if (error.message.includes("NetworkError")) {
        errorMessage =
          "Network error. Please try again or contact me directly.";
      } else if (
        error.name === "TypeError" &&
        error.message.includes("fetch")
      ) {
        errorMessage =
          "Unable to connect to the server. Please try again later.";
      }

      // Use the enhanced error handling function
      showUserFriendlyError(errorMessage, button, btnText, btnIcon, error);

      // Log detailed error for debugging
      console.error("Network error details:", {
        name: error.name,
        message: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString(),
      });
    });
}

function renderSvgIcon() {
  const socialIconContainer = createHtmlElement("div", {
    class: "social-icons",
  });

  function createIconLink(svgIcon, link) {
    const iconLink = createHtmlElement("a", {
      class: "icon",
      href: `${link}`,
      target: "_",
    });

    createSvgIcon(svgIcon, options, iconLink);
    return iconLink;
  }

  const gitIcon = createIconLink(github, config.social.github);
  const linkedInIcon = createIconLink(linkedIn, config.social.linkedin);
  const mailIcon = createIconLink(mail, `mailto:${config.contact.email}`);

  socialIconContainer.append(gitIcon, linkedInIcon, mailIcon);

  return socialIconContainer;
}

// Helper function to create form fields
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
    <span class="label-icon">${icon}</span>
    <span class="label-text">${label}</span>
  `;

  const inputWrapper = createHtmlElement("div", { class: "input-wrapper" });

  let input;
  if (textarea) {
    input = createHtmlElement("textarea", {
      class: "form__control",
      id,
      name,
      rows,
      required,
      placeholder,
    });
  } else {
    input = createHtmlElement("input", {
      type,
      class: "form__control",
      id,
      name,
      required,
      placeholder,
    });
  }

  const border = createHtmlElement("div", { class: "input-border" });
  inputWrapper.append(input, border);

  const errorElement = createHtmlElement("div", {
    class: "field-error",
    id: `${id}-error`,
  });

  field.append(labelElement, inputWrapper, errorElement);
  return field;
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
    "🔒 Your information is secure and will never be shared."
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
  const submitBtn = form.querySelector(".btn__submit");

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

  // Submit button hover effects
  submitBtn.addEventListener("mouseenter", () =>
    submitBtn.classList.add("hovered")
  );
  submitBtn.addEventListener("mouseleave", () =>
    submitBtn.classList.remove("hovered")
  );
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

  // Show error if invalid
  if (!isValid) {
    wrapper.classList.add("error");
    if (errorElement) errorElement.textContent = errorMessage;
  }

  return isValid;
}
