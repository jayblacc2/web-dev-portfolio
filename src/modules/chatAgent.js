import { createHtmlElement } from "../utils/utils";
import resumePdf from "../../public/resume.pdf";

// Lightweight rule-based chat agent about the portfolio owner
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
    "Nextjs",
    "Nodejs",
  ],
  about:
    "I am a passionate frontend developer focused on creating visually appealing and user-friendly web applications. I deliver high-quality code and collaborate to build exceptional experiences.",
  resume: resumePdf,
  contact: {
    action: "Use the contact section to reach out — I'll respond promptly.",
  },
};

const responses = [
  {
    keywords: ["help", "commands", "what can you do", "options"],
    response: "You can ask: 'who are you', 'what do you do', 'skills', 'projects', 'experience', 'resume', 'contact'.",
  },
  {
    keywords: ["who are you", "your name", "name", "introduce"],
    response: () => `I'm ${KB.name}, a ${KB.role}.`,
  },
  {
    keywords: ["what do you do", "job", "role", "title"],
    response: `${KB.role} focused on building modern, performant UIs.`,
  },
  {
    keywords: ["skills", "stack", "technologies", "tech", "tools"],
    response: `Core skills: ${KB.tags.join(", ")}.`,
  },
  {
    keywords: ["about", "summary", "experience", "background"],
    response: KB.about,
  },
  {
    keywords: ["projects", "portfolio", "work"],
    response: "You can explore highlighted projects in the Projects section above. Ask about a specific stack to filter.",
  },
  {
    keywords: ["resume", "cv"],
    response: `You can download my resume here: ${KB.resume}`,
  },
  {
    keywords: ["contact", "email", "reach"],
    response: KB.contact.action,
  },
  {
    keywords: ["react"],
    response: "Yes, I build SPA and component-driven UIs with React.",
  },
  {
    keywords: ["vue"],
    response: "I also have hands-on experience with Vue.",
  },
  {
    keywords: ["typescript"],
    response: "Comfortable with TypeScript for safer, scalable code.",
  },
];

function normalize(s) {
  return s.toLowerCase();
}

class ChatAgent {
  constructor() {
    this.container = createHtmlElement("div", {
      class: "chat-widget",
      role: "complementary",
      ["aria-label"]: "Chat about me",
    });

    this.createToggle();
    this.createPanel();
    this.setupEventListeners();
    this.addBotMessage("Hi! I'm a mini assistant. Ask me about Johnson — skills, projects, experience, or type 'help'.");
  }

  createToggle() {
    this.toggle = createHtmlElement("button", {
      class: "chat-toggle",
      type: "button",
      ["aria-expanded"]: "false",
      title: "Open chat",
    });
    this.toggle.innerHTML = `<i class="fa-solid fa-message"></i>`;
    this.container.append(this.toggle);
  }

  createPanel() {
    this.panel = createHtmlElement("div", {
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

    this.messages = createHtmlElement("div", { class: "chat-messages" });

    const inputRow = createHtmlElement("form", { class: "chat-input-row" });
    this.input = createHtmlElement("input", {
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
    inputRow.append(this.input, sendBtn);

    this.panel.append(header, this.messages, inputRow);
    this.container.append(this.panel);

    this.closeBtn = header.querySelector(".chat-close");
  }

  setupEventListeners() {
    this.toggle.addEventListener("click", () => this.toggleChat());
    this.closeBtn.addEventListener("click", () => this.close());
    this.panel.querySelector(".chat-input-row").addEventListener("submit", (e) => this.handleSubmit(e));
  }

  toggleChat() {
    this.container.classList.contains("open") ? this.close() : this.open();
  }

  open() {
    this.container.classList.add("open");
    this.toggle.setAttribute("aria-expanded", "true");
    setTimeout(() => this.input.focus(), 0);
  }

  close() {
    this.container.classList.remove("open");
    this.toggle.setAttribute("aria-expanded", "false");
  }

  handleSubmit(e) {
    e.preventDefault();
    const text = this.input.value.trim();
    if (!text) return;
    this.addUserMessage(text);
    this.respond(text);
    this.input.value = "";
  }

  respond(raw) {
    const q = normalize(raw);

    for (const { keywords, response } of responses) {
      if (keywords.some((k) => q.includes(k))) {
        const msg = typeof response === "function" ? response() : response;
        return this.addBotMessage(msg);
      }
    }

    return this.addBotMessage(
      "I might have missed that. Try asking about skills, projects, or resume. Type 'help' for options."
    );
  }

  addMessage(type, text) {
    const row = createHtmlElement("div", { class: `msg msg-${type}` });
    const bubble = createHtmlElement("div", { class: "bubble" });
    bubble.textContent = text;
    row.append(bubble);
    this.messages.append(row);
    this.messages.scrollTop = this.messages.scrollHeight;
  }

  addUserMessage(text) {
    this.addMessage("user", text);
  }

  addBotMessage(text) {
    this.addMessage("bot", text);
  }
}

export function createChatAgent() {
  return new ChatAgent().container;
}
