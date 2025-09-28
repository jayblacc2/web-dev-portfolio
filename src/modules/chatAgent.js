import { createHtmlElement, createElement } from "../utils/utils";
import resumePdf from "../../public/resume.pdf";

// Lightweight rule-based chat agent about the portfolio owner
export function createChatAgent() {
  const container = createHtmlElement("div", {
    class: "chat-widget",
    role: "complementary",
    ["aria-label"]: "Chat about me",
  });

  // Toggle button (floating)
  const toggle = createHtmlElement("button", {
    class: "chat-toggle",
    type: "button",
    ["aria-expanded"]: "false",
    title: "Open chat",
  });
  toggle.innerHTML = `<i class="fa-solid fa-message"></i>`;

  // Panel
  const panel = createHtmlElement("div", {
    class: "chat-panel",
    role: "dialog",
    ["aria-modal"]: "false",
  });

  const header = createHtmlElement("div", { class: "chat-header" });
  header.innerHTML = `
    <div class="chat-title">
      <span class="dot online"></span>
      <strong>Ask about Johnson</strong>
    </div>
    <button class="chat-close" type="button" title="Close"><i class="fa-solid fa-xmark"></i></button>
  `;

  const messages = createHtmlElement("div", { class: "chat-messages" });

  const inputRow = createHtmlElement("form", { class: "chat-input-row" });
  const input = createHtmlElement("input", {
    class: "chat-input",
    type: "text",
    placeholder: "Ask about skills, projects, resume...",
    ["aria-label"]: "Type your question",
  });
  const sendBtn = createHtmlElement("button", {
    class: "chat-send",
    type: "submit",
    title: "Send",
  });
  sendBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
  inputRow.append(input, sendBtn);

  panel.append(header, messages, inputRow);
  container.append(toggle, panel);

  // Seed welcome message
  addBot(
    messages,
    "Hi! I'm a mini assistant. Ask me about Johnson — skills, projects, experience, or type 'help'."
  );

  // Toggle logic
  const closeBtn = header.querySelector(".chat-close");
  function open() {
    container.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    setTimeout(() => input.focus(), 0);
  }

  function close() {
    container.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", () => {
    container.classList.contains("open") ? close() : open();
  });
  closeBtn.addEventListener("click", close);

  // Submit handler
  inputRow.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    addUser(messages, text);
    respond(messages, text);
    input.value = "";
  });

  return container;
}

// Simple knowledge base
const KB = {
  name: "Johnson",
  role: "Front End Developer",
  tags: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "SCSS",
    "Git",
    "Bootstrap",
    "Tailwind",
    "Vue",
  ],
  about:
    "I am a passionate frontend developer focused on creating visually appealing and user-friendly web applications. I deliver high-quality code and collaborate to build exceptional experiences.",
  resume: resumePdf,
  contact: {
    action: "Use the contact section to reach out — I'll respond promptly.",
  },
};

function normalize(s) {
  return s.toLowerCase();
}

function respond(messages, raw) {
  const q = normalize(raw);

  // Help
  if (
    ["help", "commands", "what can you do", "options"].some((t) =>
      q.includes(t)
    )
  ) {
    return addBot(
      messages,
      "You can ask: 'who are you', 'what do you do', 'skills', 'projects', 'experience', 'resume', 'contact'."
    );
  }

  // Name/intro
  if (
    ["who are you", "your name", "name", "introduce"].some((t) => q.includes(t))
  ) {
    return addBot(messages, `I'm ${KB.name}, a ${KB.role}.`);
  }

  // Role
  if (["what do you do", "job", "role", "title"].some((t) => q.includes(t))) {
    return addBot(
      messages,
      `${KB.role} focused on building modern, performant UIs.`
    );
  }

  // Skills/stack
  if (
    ["skills", "stack", "technologies", "tech", "tools"].some((t) =>
      q.includes(t)
    )
  ) {
    return addBot(messages, `Core skills: ${KB.tags.join(", ")}.`);
  }

  // About/summary
  if (
    ["about", "summary", "experience", "background"].some((t) => q.includes(t))
  ) {
    return addBot(messages, KB.about);
  }

  // Projects
  if (["projects", "portfolio", "work"].some((t) => q.includes(t))) {
    return addBot(
      messages,
      "You can explore highlighted projects in the Projects section above. Ask about a specific stack to filter."
    );
  }

  // Resume
  if (["resume", "cv"].some((t) => q.includes(t))) {
    return addBot(messages, `You can download my resume here: ${KB.resume}`);
  }

  // Contact
  if (["contact", "email", "reach"].some((t) => q.includes(t))) {
    return addBot(messages, KB.contact.action);
  }

  // Fallback: simple keyword tips
  if (q.includes("react"))
    return addBot(
      messages,
      "Yes, I build SPA and component-driven UIs with React."
    );
  if (q.includes("vue"))
    return addBot(messages, "I also have hands-on experience with Vue.");
  if (q.includes("typescript"))
    return addBot(
      messages,
      "Comfortable with TypeScript for safer, scalable code."
    );

  return addBot(
    messages,
    "I might have missed that. Try asking about skills, projects, or resume. Type 'help' for options."
  );
}

function addUser(container, text) {
  const row = createHtmlElement("div", { class: "msg msg-user" });
  const bubble = createHtmlElement("div", { class: "bubble" });
  bubble.textContent = text;
  row.append(bubble);
  container.append(row);
  container.scrollTop = container.scrollHeight;
}

function addBot(container, text) {
  const row = createHtmlElement("div", { class: "msg msg-bot" });
  const bubble = createHtmlElement("div", { class: "bubble" });
  bubble.textContent = text;
  row.append(bubble);
  container.append(row);
  container.scrollTop = container.scrollHeight;
  return row;
}
