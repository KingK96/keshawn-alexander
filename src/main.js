import "./style.css";
import { projects } from "./projects.js";
import { setupNav } from "./ui.js";

const LINKEDIN_URL = "https://www.linkedin.com/in/ke-shawn-alexander/";
const GITHUB_URL = "https://github.com/KingK96";
const EMAIL = "akeshawn@yahoo.com";
const RESUME_PATH = `${import.meta.env.BASE_URL}KeShawn_Alexander_Resume.pdf`;

const app = document.querySelector("#app");

app.innerHTML = `

  <div id="site" class="site">

  <header class="header">
    <div class="container header__inner">
      <a class="logo" href="#top" aria-label="Home">
        <span class="logo__text">Ke'Shawn Alexander's Personal Website</span>
      </a>

      <nav class="nav" aria-label="Primary">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <a class="btn btn--solid btn--sm" href="${RESUME_PATH}" target="_blank" rel="noreferrer">View Resume</a>
      </nav>

      <button class="hamburger" id="hamburger" type="button" aria-label="Open menu">☰</button>
    </div>

    <div class="mobileNav" id="mobileNav" aria-label="Mobile menu">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
      <a class="btn btn--solid" href="${RESUME_PATH}" target="_blank" rel="noreferrer">View Resume</a>
    </div>
  </header>

  <main id="top">
    <section class="hero">
  <div class="container hero__inner">
    <div class="hero__left">

      <h1>Building products and programs that expand opportunity.</h1>

      <p class="lead">
        I build mission-driven pipelines through <strong>R.O.S.A</strong> and ship products like <strong>SkySpot</strong>, <strong>The Unveil</strong>, and a <strong>NIL Registry</strong>.
      </p>

      <div class="metrics">
        <div class="metric">
          <div class="metric__k">200+</div>
          <div class="metric__l">students served (R.O.S.A)</div>
        </div>
        <div class="metric">
          <div class="metric__k">25+</div>
          <div class="metric__l">SkySpot beta users</div>
        </div>
        <div class="metric">
          <div class="metric__k">0→1</div>
          <div class="metric__l">shipping mindset</div>
        </div>
      </div>
    </div>
  </div>
</section>

    <section class="section" id="work">
      <div class="container">
        <div class="section__head">
          <h2>Work</h2>
          <p class="muted">Four builds. Clear problems. Built to scale.</p>
        </div>
        <div class="grid" id="workGrid"></div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container">
        <div class="section__head">
          <h2>About</h2>
          <p class="muted">Empathy, rigor, and execution.</p>
        </div>

        <div class="twoCol">
          <div class="card">
            <h3>Leadership</h3>
            <p class="muted">
              I lead with clarity and standards. I’m focused on measurable outcomes, strong partnerships, and building
              systems that create momentum.
            </p>
            <div class="chips">
              <span class="chip">Product strategy</span>
              <span class="chip">0→1 execution</span>
              <span class="chip">Partnerships</span>
              <span class="chip">Data-driven</span>
            </div>
          </div>

          <div class="card">
            <h3>Direct</h3>
            <div class="rows">
              <a class="row" href="mailto:${EMAIL}"><span>Email</span><span class="muted">${EMAIL}</span></a>
              <a class="row" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer"><span>LinkedIn</span><span class="muted">Open</span></a>
              <a class="row" href="${GITHUB_URL}" target="_blank" rel="noreferrer"><span>GitHub</span><span class="muted">Open</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="resume">
      <div class="container">
        <div class="section__head">
          <h2>Resume</h2>
          <p class="muted">View online or download the PDF.</p>
        </div>

        <div class="resumeGrid">
          <div class="card">
            <h3>Executive snapshot</h3>
            <div class="bullets">
              <div class="bullet">Owns product vision, roadmap, and delivery across high-impact initiatives.</div>
              <div class="bullet">Uses experimentation and analytics to improve conversion and retention.</div>
              <div class="bullet">Builds scalable programs and partnerships through R.O.S.A (200+ students served).</div>
            </div>

            <div class="actions">
              <a class="btn btn--solid btn--sm" href="${RESUME_PATH}" target="_blank" rel="noreferrer">Open PDF</a>
              <a class="btn btn--outline btn--sm" href="${RESUME_PATH}" download>Download</a>
            </div>
          </div>

          <div class="card resumeFrameWrap">
            <div class="frameTop">
              <span class="pill">Preview</span>
              <a class="btn btn--outline btn--sm" href="${RESUME_PATH}" target="_blank" rel="noreferrer">Open full</a>
            </div>
            <iframe class="resumeFrame" src="${RESUME_PATH}#view=FitH" title="Resume" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="contact">
      <div class="container">
        <div class="section__head">
          <h2>Contact</h2>
          <p class="muted">Best way to reach me is email. This drafts a message for you.</p>
        </div>

        <div class="twoCol">
          <div class="card">
            <h3>Quick message</h3>
            <form id="quickForm" class="form">
              <label class="label">Your name
                <input class="input" name="name" placeholder="Jane Doe" required />
              </label>
              <label class="label">Topic
                <input class="input" name="topic" placeholder="Partnership / Hiring / Speaking / Beta" required />
              </label>
              <label class="label">Message
                <textarea class="textarea" name="message" rows="5" placeholder="Write a quick note..." required></textarea>
              </label>
              <button class="btn btn--solid" type="submit">Draft email</button>
            </form>
          </div>

          <div class="card">
            <h3>Direct</h3>
            <div class="rows">
              <a class="row" href="mailto:${EMAIL}"><span>Email</span><span class="muted">${EMAIL}</span></a>
              <a class="row" href="${LINKEDIN_URL}" target="_blank" rel="noreferrer"><span>LinkedIn</span><span class="muted">Open</span></a>
              <a class="row" href="${RESUME_PATH}" target="_blank" rel="noreferrer"><span>Resume</span><span class="muted">View PDF</span></a>
            </div>
          </div>
        </div>

        <footer class="footer">
          <span>© <span id="year"></span> Ke'Shawn Alexander</span>
        </footer>
      </div>
    </section>
  </main>
  </div>
`;

// Add enter overlay (does NOT remove/hide the site)
// ENTER OVERLAY (does not hide the site)
app.insertAdjacentHTML(
  "afterbegin",
  `
  <div id="enter" class="enter">
    <div class="enter__card">
      <div class="enter__name">Ke'Shawn Alexander</div>
      <div class="enter__tag">Founder • Product Leader • Technologist</div>
      <button class="btn btn--solid enter__btn" id="enterBtn" type="button">Enter</button>
      <button class="enter__link" id="skipBtn" type="button">Skip</button>
    </div>
  </div>
`
);

const enter = document.getElementById("enter");
const enterBtn = document.getElementById("enterBtn");
const skipBtn = document.getElementById("skipBtn");

function closeEnter() {
  enter?.classList.add("enter--hide");
  window.setTimeout(() => enter?.remove(), 240);
  localStorage.setItem("keshawn_entered", "1");
}

if (localStorage.getItem("keshawn_entered") === "1") {
  enter?.remove();
} else {
  enterBtn?.addEventListener("click", closeEnter);
  skipBtn?.addEventListener("click", closeEnter);
}


document.querySelector("#year").textContent = String(new Date().getFullYear());



// Work cards
document.querySelector("#workGrid").innerHTML = projects
  .map((p) => {
    const links = (p.links || [])
      .map((l) => {
        const isAnchor = l.href.startsWith("#");
        const extra = isAnchor ? "" : ' target="_blank" rel="noreferrer"';
        return `<a class="btn btn--outline btn--sm" href="${l.href}"${extra}>${l.label}</a>`;
      })
      .join("");

    return `
      <article class="card">
        <div class="workTop">
          <div>
            <div class="workTitle">${p.title}</div>
            <div class="muted" style="margin-top:6px">${p.subtitle}</div>
          </div>
          <div class="pill">${p.metric}</div>
        </div>
        <p class="muted" style="margin-top:12px;line-height:1.7">${p.description}</p>
        <div class="actions">${links}</div>
      </article>
    `;
  })
  .join("");

setupNav({ hamburgerId: "hamburger", mobileNavId: "mobileNav" });


// Email draft
document.querySelector("#quickForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const name = String(data.get("name") || "").trim();
  const topic = String(data.get("topic") || "").trim();
  const message = String(data.get("message") || "").trim();

  const subject = encodeURIComponent(`[Website] ${topic}`);
  const body = encodeURIComponent(`Hi Ke'Shawn,\n\nMy name is ${name}.\n\n${message}\n\nBest,\n${name}\n`);
  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});