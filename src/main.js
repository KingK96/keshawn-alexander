import "./style.css";
import { projects } from "./projects.js";
import { setupThemeToggle } from "./theme.js";
import { setupNav } from "./ui.js";

const LINKEDIN_URL = "https://www.linkedin.com/in/ke-shawn-alexander/";
const GITHUB_URL = "https://github.com/KingK96";
const EMAIL = "akeshawn@yahoo.com";
const RESUME_PATH = "./KeShawn_Alexander_Resume.pdf";

const app = document.querySelector("#app");

app.innerHTML = `
  <header class="topbar">
    <div class="container topbar__inner">
      <a class="wordmark" href="#top" aria-label="Home">
        <span class="wordmark__mark"></span>
        <span class="wordmark__text">Ke'Shawn Alexander</span>
      </a>

      <nav class="topnav" aria-label="Primary">
        <a class="topnav__link" href="#work">Work</a>
        <a class="topnav__link" href="#about">About</a>
        <a class="topnav__link" href="#resume">Resume</a>
        <a class="topnav__link" href="#contact">Contact</a>

        <a class="btn btn--primary btn--sm" href="${RESUME_PATH}" target="_blank" rel="noreferrer">
          View Resume
        </a>

        <button class="iconBtn" id="themeToggle" type="button" aria-label="Toggle theme">
          <span id="themeIcon" aria-hidden="true">☾</span>
        </button>
      </nav>

      <button class="hamburger" id="hamburger" type="button" aria-label="Open menu">☰</button>
    </div>

    <div class="mobileMenu" id="mobileNav" aria-label="Mobile menu">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
      <div class="mobileMenu__row">
        <a class="btn btn--primary" href="${RESUME_PATH}" target="_blank" rel="noreferrer">View Resume</a>
        <button class="btn btn--ghost" id="themeToggleMobile" type="button">Toggle theme</button>
      </div>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <div class="kicker">Founder • Product Leader • Technologist</div>

          <h1 class="hero__title">
            Building products and programs that expand opportunity.
          </h1>

          <p class="hero__subtitle">
            I lead with clarity and execution—building mission-driven pipelines through <strong>R.O.S.A</strong>
            and shipping products like <strong>SkySpot</strong>, <strong>The Unveil</strong>, and a <strong>NIL Registry</strong>.
          </p>

          <div class="hero__actions">
            <a class="btn btn--primary" href="#work">Explore work</a>
            <a class="btn btn--ghost" href="#contact">Let’s connect</a>
          </div>

          <div class="signal">
            <div class="signal__item">
              <div class="signal__value">200+</div>
              <div class="signal__label">students served (R.O.S.A)</div>
            </div>
            <div class="signal__item">
              <div class="signal__value">25+</div>
              <div class="signal__label">SkySpot beta users</div>
            </div>
            <div class="signal__item">
              <div class="signal__value">0→1</div>
              <div class="signal__label">builder mentality</div>
            </div>
          </div>
        </div>

        <div class="hero__panel">
          <div class="panelCard">
            <div class="panelCard__top">
              <div class="panelBadge">Now building</div>
              <div class="panelTag">2026</div>
            </div>

            <div class="panelList" id="panelList"></div>

            <div class="panelCard__cta">
              <a class="btn btn--primary btn--sm" href="#work">See details</a>
              <a class="btn btn--ghost btn--sm" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="work">
      <div class="container">
        <div class="sectionHead">
          <h2>Work</h2>
          <p>Four builds. Clear problems. Real outcomes. Built to scale.</p>
        </div>

        <div class="workGrid" id="workGrid"></div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="sectionHead">
          <h2>About</h2>
          <p>How I operate: empathy, rigor, and shipping—fast.</p>
        </div>

        <div class="aboutGrid">
          <div class="card card--xl">
            <h3 class="cardTitle">Leadership thesis</h3>
            <p class="body">
              I build systems that reduce friction and increase access—whether that’s helping students reach high-growth careers
              or helping travelers make flights with confidence. I’m obsessed with clarity, accountability, and momentum.
            </p>

            <div class="split">
              <div class="chip">Product strategy</div>
              <div class="chip">0→1 execution</div>
              <div class="chip">Partnerships</div>
              <div class="chip">Data-driven decisions</div>
            </div>
          </div>

          <div class="card card--xl">
            <h3 class="cardTitle">What I’m looking for</h3>
            <p class="body muted">
              Partnerships, hiring opportunities, speaking, and founders/operators who value high standards and real output.
            </p>

            <div class="contactRows">
              <a class="rowLink" href="mailto:${EMAIL}">
                <span>Email</span><span class="rowLink__right">${EMAIL}</span>
              </a>
              <a class="rowLink" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">
                <span>LinkedIn</span><span class="rowLink__right">Open</span>
              </a>
              <a class="rowLink" href="${GITHUB_URL}" target="_blank" rel="noreferrer">
                <span>GitHub</span><span class="rowLink__right">Open</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="resume">
      <div class="container">
        <div class="sectionHead">
          <h2>Resume</h2>
          <p>View online or download the PDF.</p>
        </div>

        <div class="resumeGrid">
          <div class="card card--xl">
            <div class="resumeTop">
              <div>
                <h3 class="cardTitle">Executive snapshot</h3>
              </div>
              <div class="resumeBtns">
                <a class="btn btn--ghost btn--sm" href="${RESUME_PATH}" download>Download</a>
              </div>
            </div>

            <div class="resumeBullets">
              <div class="bullet">Owns product vision, roadmap, and delivery for high-impact digital initiatives.</div>
<div class="bullet">Drives experimentation (A/B testing, cohorts) to improve conversion and retention.</div>
<div class="bullet">Leads cross-functional execution and workflow automation to scale systems and reduce manual work.</div>
<div class="bullet">Leads 0→1 product strategy and execution across consumer and platform initiatives.</div>
<div class="bullet">Uses experimentation and analytics to drive measurable growth (conversion, retention, reliability).</div>
<div class="bullet">Builds scalable programs and partnerships through R.O.S.A, serving 200+ students.</div>

            </div>
          </div>

          <div class="card card--xl resumeFrameWrap">
            <div class="resumeFrameHead">
              <div class="panelBadge">Preview</div>
              <a class="btn btn--ghost btn--sm" href="${RESUME_PATH}" target="_blank" rel="noreferrer">Open full</a>
            </div>
            <iframe
              class="resumeFrame"
              src="${RESUME_PATH}#view=FitH"
              title="Ke'Shawn Alexander Resume"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="sectionHead">
          <h2>Contact</h2>
          <p>Best way to reach me is email. The form below drafts a message for you.</p>
        </div>

        <div class="contactGrid">
          <div class="card card--xl">
            <h3 class="cardTitle">Quick message</h3>
            <p class="body muted">Opens your email with a pre-filled note.</p>

            <form id="quickForm" class="form">
              <label class="label">
                Your name
                <input class="input" name="name" placeholder="Jane Doe" required />
              </label>

              <label class="label">
                Topic
                <input class="input" name="topic" placeholder="Partnership / Hiring / Speaking / Beta" required />
              </label>

              <label class="label">
                Message
                <textarea class="textarea" name="message" placeholder="Write a quick note..." rows="5" required></textarea>
              </label>

              <button class="btn btn--primary" type="submit">Draft email</button>
            </form>
          </div>

          <div class="card card--xl">
            <h3 class="cardTitle">Direct</h3>
            <p class="body muted">For fast response, use email.</p>

            <div class="contactRows">
              <a class="rowLink" href="mailto:${EMAIL}">
                <span>Email</span><span class="rowLink__right">${EMAIL}</span>
              </a>
              <a class="rowLink" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer">
                <span>LinkedIn</span><span class="rowLink__right">Open</span>
              </a>
              <a class="rowLink" href="${RESUME_PATH}" target="_blank" rel="noreferrer">
                <span>Resume</span><span class="rowLink__right">View PDF</span>
              </a>
            </div>

            <div class="divider"></div>

            <div class="body muted">
              Looking for: Partnerships, Product management roles, Speaking Opportunities, and Strategic Intros.
            </div>
          </div>
        </div>

        <footer class="footer">
          <span>© <span id="year"></span> Ke'Shawn Alexander</span>
          <span class="muted">GitHub Pages • Vite</span>
        </footer>
      </div>
    </section>
  </main>
`;

document.querySelector("#year").textContent = String(new Date().getFullYear());

// Right panel list
const panel = document.querySelector("#panelList");
panel.innerHTML = projects
  .map(
    (p) => `
    <div class="panelItem">
      <div class="panelItem__left">
        <div class="panelItem__title">${p.title}</div>
        <div class="panelItem__sub muted">${p.subtitle}</div>
      </div>
      <div class="panelItem__metric">${p.metric}</div>
    </div>
  `
  )
  .join("");

// Work grid
const grid = document.querySelector("#workGrid");
grid.innerHTML = projects
  .map((p) => {
    const links = (p.links || [])
      .map((l) => {
        const isAnchor = l.href.startsWith("#");
        const extra = isAnchor ? "" : ' target="_blank" rel="noreferrer"';
        return `<a class="btn btn--ghost btn--sm" href="${l.href}"${extra}>${l.label}</a>`;
      })
      .join("");

    return `
      <article class="card card--work">
        <div class="workTop">
          <div>
            <div class="workTitle">${p.title}</div>
            <div class="workSub muted">${p.subtitle}</div>
          </div>
          <div class="metricPill">${p.metric}</div>
        </div>

        <p class="body muted">${p.description}</p>

        <div class="workActions">
          ${links}
        </div>
      </article>
    `;
  })
  .join("");

setupThemeToggle({
  desktopBtnId: "themeToggle",
  mobileBtnId: "themeToggleMobile",
  iconId: "themeIcon",
});

setupNav({ hamburgerId: "hamburger", mobileNavId: "mobileNav" });

// Email draft
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
