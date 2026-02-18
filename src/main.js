import "./styles.css";
import { projects } from "./projects.js";
import { renderProjects } from "./renderProjects.js";
import { setupThemeToggle } from "./theme.js";
import { setupNav } from "./ui.js";

const LINKEDIN_URL = "https://www.linkedin.com/in/ke-shawn-alexander/";
const GITHUB_URL = "https://github.com/KingK96";
const EMAIL = "akeshawn@yahoo.com";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="header">
    <div class="container header__inner">
      <a class="brand" href="#top" aria-label="Home">
        <span class="brand__dot"></span>
        <span class="brand__text">Ke'Shawn Alexander</span>
      </a>

      <nav class="nav" aria-label="Primary">
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <button class="btn btn--ghost" id="themeToggle" type="button" aria-label="Toggle theme">
          <span id="themeIcon" aria-hidden="true">☾</span>
        </button>
      </nav>

      <button class="hamburger" id="hamburger" type="button" aria-label="Open menu">☰</button>
    </div>

    <div class="mobileNav" id="mobileNav" aria-label="Mobile menu">
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
      <button class="btn btn--ghost" id="themeToggleMobile" type="button">Toggle theme</button>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero__inner">
        <p class="pill">Product builder • Nonprofit founder • Technologist</p>
        <h1>Building products and programs that expand opportunity.</h1>
        <p class="hero__sub">
          I build community pipelines through R.O.S.A and ship products like SkySpot and The Unveil—focused on clarity, outcomes, and real users.
        </p>
        <div class="hero__cta">
          <a class="btn" href="#projects">Explore projects</a>
          <a class="btn btn--ghost" href="#contact">Let’s connect</a>
        </div>

        <div class="hero__stats">
          <div class="stat">
            <div class="stat__k">4</div>
            <div class="stat__l">Active builds</div>
          </div>
          <div class="stat">
            <div class="stat__k">0→1</div>
            <div class="stat__l">Shipping mindset</div>
          </div>
          <div class="stat">
            <div class="stat__k">Impact</div>
            <div class="stat__l">Mission-driven</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="container">
        <div class="section__head">
          <h2>Projects</h2>
          <p>What I’m building right now—each with a clear problem, audience, and outcome.</p>
        </div>
        <div class="grid" id="projectsGrid"></div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section__head">
          <h2>About</h2>
          <p>How I think and how I build.</p>
        </div>

        <div class="card card--wide">
          <div class="prose">
            <p>
              I’m a product builder and nonprofit founder focused on creating systems that increase access and reduce friction.
              I care about empathy, measurable outcomes, and shipping—fast.
            </p>
            <p>
              Through <strong>R.O.S.A</strong>, I build pathways for students through STEM education and real opportunity access.
              In parallel, I’m building consumer products like <strong>SkySpot</strong> and <strong>The Unveil</strong>, plus infrastructure like a <strong>NIL Registry</strong>.
            </p>
            <p class="muted">
              If you’re hiring, want to partner, or want to try the products—reach out.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="section__head">
          <h2>Contact</h2>
          <p>Email + LinkedIn are best. The form below drafts a message for you.</p>
        </div>

        <div class="grid grid--contact">
          <div class="card">
            <h3>Reach out</h3>
            <p class="muted">For partnerships, hiring, speaking, or beta testing.</p>
            <div class="contactList">
              <a class="linkRow" href="mailto:${EMAIL}">${EMAIL}</a>
              <a class="linkRow" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">LinkedIn</a>
              <a class="linkRow" href="${GITHUB_URL}" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div class="card">
            <h3>Quick message</h3>
            <p class="muted">Opens your email with a prefilled note.</p>
            <form id="quickForm">
              <label class="label">
                Your name
                <input class="input" name="name" placeholder="Jane Doe" required />
              </label>
              <label class="label">
                What’s this about?
                <input class="input" name="topic" placeholder="Partnership / Hiring / Beta feedback" required />
              </label>
              <label class="label">
                Message
                <textarea class="textarea" name="message" placeholder="Write a quick note..." rows="4" required></textarea>
              </label>
              <button class="btn" type="submit">Draft email</button>
            </form>
          </div>
        </div>

        <footer class="footer">
          <span>© <span id="year"></span> Ke'Shawn Alexander</span>
          <span class="muted">Built on GitHub Pages</span>
        </footer>
      </div>
    </section>
  </main>
`;

document.querySelector("#year").textContent = String(new Date().getFullYear());

renderProjects(document.querySelector("#projectsGrid"), projects);
setupThemeToggle({ desktopBtnId: "themeToggle", mobileBtnId: "themeToggleMobile", iconId: "themeIcon" });
setupNav({ hamburgerId: "hamburger", mobileNavId: "mobileNav" });

document.querySelector("#quickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") || "").trim();
  const topic = String(data.get("topic") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`[Website] ${topic}`);
  const body = encodeURIComponent(
    `Hi Ke'Shawn,\n\nMy name is ${name}.\n\n${message}\n\nBest,\n${name}\n`
  );

  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});

