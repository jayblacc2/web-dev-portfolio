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
  const titles = ["Have any", "Project in Mind"];
  renderTitle(titles, mainHeader);

  const text = `I bring static designs to life as a creative front-end developer. Let's build something together!`;
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

  return fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
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
        // Error state
        button.classList.add("error");
        btnText.textContent = "Try Again";
        btnIcon.textContent = "❌";

        response
          .json()
          .then((data) => {
            if (data.errors) {
              data.errors.forEach((error) => alertBadge(error.message, "red"));
            } else {
              alertBadge("Failed to send message. Please try again.", "red");
            }
          })
          .catch(() => {
            alertBadge("Failed to send message. Please try again.", "red");
          });

        // Reset error state
        setTimeout(() => {
          button.classList.remove("error");
          btnText.textContent = "Send Message";
          btnIcon.textContent = "🚀";
        }, 3000);
      }
    })
    .catch((error) => {
      alertBadge("Failed to send message. Please try again.", "red");

      // Network error state
      button.classList.add("error");
      btnText.textContent = "Connection Error";
      btnIcon.textContent = "🔄";

      alertBadge(
        "Network error. Please check your connection and try again.",
        "red"
      );

      // Reset error state
      setTimeout(() => {
        button.classList.remove("error");
        btnText.textContent = "Send Message";
        btnIcon.textContent = "🚀";
      }, 3000);
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
    <p class="form__subtitle">Ready to bring your ideas to life? Drop me a message!</p>
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
