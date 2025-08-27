import { github, linkedIn, mail } from "../images/svgIcons/icons";

import {
  createSvgIcon,
  renderTitle,
  renderSubTitle,
  alertBadge,
} from "../utils/utils";
import { createHtmlElement } from "../utils/utils";
import { options } from "../utils/variable";

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
    .querySelector("#contact")
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

          // Reset floating labels
          const labels = form.querySelectorAll(".floating-label");
          labels.forEach((label) => label.classList.remove("active"));

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
      console.error("Form submission error:", error);

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

  const gitIcon = createIconLink(github, "https://github.com");
  const linkedInIcon = createIconLink(linkedIn, "https://linkedin.com");
  const mailIcon = createIconLink(mail, "https://live.com");

  socialIconContainer.append(gitIcon, linkedInIcon, mailIcon);

  return socialIconContainer;
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
    id: "contact",
    autocomplete: "off",
    action: "https://formspree.io/f/mknyknkr",
    method: "POST",
    class: "enhanced-contact-form",
  });

  form.innerHTML = `
    <div class="form__row">
      <div class="form__field">
        <div class="input-wrapper">
          <input type="text" class="form__control" id="name" name="name" required>
          <label for="name" class="floating-label">
            <span class="label-icon">👤</span>
            <span class="label-text">Full Name</span>
          </label>
          <div class="input-border"></div>
        </div>
        <div class="field-error" id="name-error"></div>
      </div>

      <div class="form__field">
        <div class="input-wrapper">
          <input type="email" class="form__control" id="email" name="email" required>
          <label for="email" class="floating-label">
            <span class="label-icon">📧</span>
            <span class="label-text">Email Address</span>
          </label>
          <div class="input-border"></div>
        </div>
        <div class="field-error" id="email-error"></div>
      </div>
    </div>

    <div class="form__field">
      <div class="input-wrapper">
        <input type="text" class="form__control" id="subject" name="subject" required>
        <label for="subject" class="floating-label">
          <span class="label-icon">💡</span>
          <span class="label-text">Project Subject</span>
        </label>
        <div class="input-border"></div>
      </div>
      <div class="field-error" id="subject-error"></div>
    </div>

    <div class="form__field">
      <div class="input-wrapper textarea-wrapper">
        <textarea class="form__control" id="message" name="message" rows="2" required></textarea>
        <label for="message" class="floating-label">
          <span class="label-icon">💬</span>
          <span class="label-text">Tell me about your project...</span>
        </label>
        <div class="input-border"></div>
        <div class="character-count">
          <span id="char-count">0</span>/500
        </div>
      </div>
      <div class="field-error" id="message-error"></div>
    </div>

    <div class="form__actions">
      <button class="btn__submit" type="submit">
        <span class="btn-text">Send Message</span>
        <span class="btn-icon">🚀</span>
        <div class="btn-loading">
          <div class="loading-spinner"></div>
        </div>
      </button>
      <div class="form__privacy">
        <small>🔒 Your information is secure and will never be shared.</small>
      </div>
    </div>
  `;

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

  // Enhanced input interactions
  inputs.forEach((input) => {
    const wrapper = input.closest(".input-wrapper");
    const label = wrapper.querySelector(".floating-label");
    const border = wrapper.querySelector(".input-border");

    // Focus and blur effects
    input.addEventListener("focus", () => {
      wrapper.classList.add("focused");
      label.classList.add("active");
    });

    input.addEventListener("blur", () => {
      wrapper.classList.remove("focused");
      if (!input.value.trim()) {
        label.classList.remove("active");
      }
    });

    // Real-time validation
    input.addEventListener("input", () => {
      validateField(input);
      if (input.value.trim()) {
        label.classList.add("active");
      }
    });

    // Check if field has value on load
    if (input.value.trim()) {
      label.classList.add("active");
    }
  });

  // Character counter for message
  if (messageInput && charCount) {
    messageInput.addEventListener("input", () => {
      const count = messageInput.value.length;
      charCount.textContent = count;

      if (count > 500) {
        charCount.parentElement.classList.add("over-limit");
        messageInput.value = messageInput.value.substring(0, 500);
        charCount.textContent = 500;
      } else {
        charCount.parentElement.classList.remove("over-limit");
      }
    });
  }

  // Enhanced submit button
  submitBtn.addEventListener("mouseenter", () => {
    submitBtn.classList.add("hovered");
  });

  submitBtn.addEventListener("mouseleave", () => {
    submitBtn.classList.remove("hovered");
  });
}

function validateField(input) {
  const errorElement = document.getElementById(`${input.id}-error`);
  const wrapper = input.closest(".input-wrapper");
  let isValid = true;
  let errorMessage = "";

  // Clear previous errors
  wrapper.classList.remove("error");
  if (errorElement) errorElement.textContent = "";

  // Validation rules
  if (!input.value.trim()) {
    isValid = false;
    errorMessage = `${input.name} is required`;
  } else if (input.type === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.value)) {
      isValid = false;
      errorMessage = "Please enter a valid email address";
    }
  } else if (input.id === "message" && input.value.length < 10) {
    isValid = false;
    errorMessage = "Message should be at least 10 characters long";
  }

  // Show error if invalid
  if (!isValid) {
    wrapper.classList.add("error");
    if (errorElement) errorElement.textContent = errorMessage;
  }

  return isValid;
}
