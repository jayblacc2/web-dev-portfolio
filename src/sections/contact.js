import { github, linkedIn, mail, skype } from "../images/svgIcons/icons";

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
      let isValid = true;

      inputs.forEach((input) => {
        if (!validateInput(input)) {
          isValid = false;
        }
      });
      if (isValid) {
        submitForm(form);
      }

      function validateInput(input) {
        if (!input.value.trim()) {
          alertBadge(`Input ${input.name} empty`, "red");
          return false;
        } else {
          return true;
        }
      }
    });

  return hero;
}

//change the validateInput
function submitForm(form) {
  const formData = new FormData(form);
  const button = form.querySelector("button");
  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alertBadge("Form submitted successfully", "green");
        console.log(formData);
        button.innerText = "Submitted";
        button.style.color = "green";
        form.reset();
        setTimeout(() => {
          button.innerText = "Submit";
          button.style.color = "#fff";
        }, 2000);
      } else {
        response.json().then((data) => {
          if (data.errors) {
            data.errors.forEach((error) => alertBadge(error.message, "red"));
          } else {
            alertBadge("Form submission failed", "red");
          }
        });
      }
    })
    .catch(() => {
      alertBadge("Form submission failed", "red");
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
  const skypeIcon = createIconLink(skype, "https://skype.com");

  socialIconContainer.append(gitIcon, linkedInIcon, mailIcon, skypeIcon);

  return socialIconContainer;
}

function contactForm() {
  const formContainer = createHtmlElement("div", { class: "form__container" });
  formContainer.innerHTML = `
  <form id="contact" autocomplete="off" action="https://formspree.io/f/mknyknkr" method="POST">
  <div class="form__name-email">
    <div class="form__field">
    <input type="text" class="form__name form__control" id="name" placeholder="Name" name="name" required>
    <label for="name"></label>
    </div>
    <div class="form__field">
    <input type="email" class="form__email form__control" id="email" placeholder="Email" name="email" required>
    <label for="email"></label>
    </div>
  </div>
  <div class="form__field">
  <input type="text" class="form__subject form__control" id="subject" placeholder="Subject" name="subject">
  <label for="subject">subject</label>
  </div>
  <div class="form__field">
  <textarea class="form__message form__control" id="message" placeholder="Start typing...." rows="10" cols="40" name="message"></textarea>
  <label for="message" required></label>
  </div>
  <div class="form__field">
    <button class="btn__submit" type="submit">Submit</button>
  </div>
</form>

 `;

  return formContainer;
}
