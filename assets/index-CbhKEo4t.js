(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const b=[{title:"R.O.S.A",subtitle:"STEM, Financial Literacy and Entrepreneurship",tag:"Nonprofit • STEM • Youth pathways",description:"Building STEM education and career pathways for students through community-powered programming and real opportunity access.",highlights:["STEM + career readiness","Community partnerships","Programs built for impact"],metric:"200+ students and parents served",links:[{label:"Visit site",href:"https://therosawfoundation.org"},{label:"Partner",href:"https://therosawfoundation.org/contactus"}]},{title:"SkySpot",subtitle:"Travel made easy",tag:"Product • Travel • AI",description:"A travel planning experience that helps people decide exactly when to leave for the airport using real-time conditions and predictive timing.",highlights:["Built & shipping","Designed for confidence","Reduces travel uncertainty"],metric:"25+ beta users",links:[{label:"Visit site",href:"https://skyspotapp.com"},{label:"Try Beta",href:"https://docs.google.com/forms/d/e/1FAIpQLSfdwhGOZiYV4ft7r_DK4Pr59LLvzBsFRJNAVV_Geyi6YXYIig/viewform"}]},{title:"The Unveil",subtitle:"Creating personalized moments for every occasion",tag:"Product • Moments • Personalization",description:"A platform to create deeply personal, interactive surprises in minutes—designed to make meaningful moments effortless.",highlights:["Emotion-forward UX","Fast creation flow","Designed to feel special"],metric:"Coming soon",links:[{label:"Coming soon",href:"#contact"}],disabled:!0},{title:"NIL Registry",subtitle:"The future of NIL",tag:"Blockchain • Identity • Verification",description:"A blockchain-based registry that helps athletes register and verify NIL rights—built for transparency and trust between athletes and brands.",highlights:["Verifiable records","Ecosystem trust","Built with smart contracts"],metric:"Testing",links:[{label:"View on GitHub",href:"https://github.com/KingK96"},{label:"Request demo",href:"#contact"}]}];function g({hamburgerId:s,mobileNavId:a}){const t=document.getElementById(s),n=document.getElementById(a);t?.addEventListener("click",()=>{n?.classList.toggle("mobileNav--open")}),n?.querySelectorAll("a").forEach(e=>e.addEventListener("click",()=>n?.classList.remove("mobileNav--open")))}document.querySelectorAll('a[href^="#"]').forEach(s=>{s.addEventListener("click",a=>{const t=s.getAttribute("href");if(!t||t==="#")return;const n=document.querySelector(t);n&&(a.preventDefault(),n.scrollIntoView({behavior:"smooth",block:"start"}),history.replaceState(null,"",t))})});const d="https://www.linkedin.com/in/ke-shawn-alexander/",f="https://github.com/KingK96",l="akeshawn@yahoo.com",r="./KeShawn_Alexander_Resume.pdf",p=document.querySelector("#app");p.innerHTML=`
<div id="enter" class="enter">
    <div class="enter__card">
      <div class="enter__name">Ke'Shawn Alexander</div>
      <div class="enter__tag">Founder • Product Leader • Technologist</div>
      <button class="btn btn--solid enter__btn" id="enterBtn" type="button">Enter</button>
    </div>
  </div>

  <div id="site" class="site site--hidden">

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
        <a class="btn btn--solid btn--sm" href="${r}" target="_blank" rel="noreferrer">View Resume</a>
      </nav>

      <button class="hamburger" id="hamburger" type="button" aria-label="Open menu">☰</button>
    </div>

    <div class="mobileNav" id="mobileNav" aria-label="Mobile menu">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#resume">Resume</a>
      <a href="#contact">Contact</a>
      <a class="btn btn--solid" href="${r}" target="_blank" rel="noreferrer">View Resume</a>
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
              <a class="row" href="mailto:${l}"><span>Email</span><span class="muted">${l}</span></a>
              <a class="row" href="${d}" target="_blank" rel="noreferrer"><span>LinkedIn</span><span class="muted">Open</span></a>
              <a class="row" href="${f}" target="_blank" rel="noreferrer"><span>GitHub</span><span class="muted">Open</span></a>
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
              <a class="btn btn--solid btn--sm" href="${r}" target="_blank" rel="noreferrer">Open PDF</a>
              <a class="btn btn--outline btn--sm" href="${r}" download>Download</a>
            </div>
          </div>

          <div class="card resumeFrameWrap">
            <div class="frameTop">
              <span class="pill">Preview</span>
              <a class="btn btn--outline btn--sm" href="${r}" target="_blank" rel="noreferrer">Open full</a>
            </div>
            <iframe class="resumeFrame" src="${r}#view=FitH" title="Resume" loading="lazy"></iframe>
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
              <a class="row" href="mailto:${l}"><span>Email</span><span class="muted">${l}</span></a>
              <a class="row" href="${d}" target="_blank" rel="noreferrer"><span>LinkedIn</span><span class="muted">Open</span></a>
              <a class="row" href="${r}" target="_blank" rel="noreferrer"><span>Resume</span><span class="muted">View PDF</span></a>
            </div>
          </div>
        </div>

        <footer class="footer">
          <span>© <span id="year"></span> Ke'Shawn Alexander</span>
        </footer>
      </div>
    </section>
  </main>
`;p.insertAdjacentHTML("afterbegin",`
  <div id="enter" class="enter">
    <div class="enter__card">
      <div class="enter__mark"></div>
      <div class="enter__name">Ke'Shawn Alexander</div>
      <div class="enter__tag">Founder • Product Leader • Technologist</div>
      <button class="btn btn--solid enter__btn" id="enterBtn" type="button">Enter</button>
      <button class="enter__link" id="skipBtn" type="button">Skip</button>
    </div>
  </div>
`);const c=document.getElementById("enter"),h=document.getElementById("enterBtn"),y=document.getElementById("skipBtn");function u(){c?.classList.add("enter--hide"),setTimeout(()=>c?.remove(),250),localStorage.setItem("keshawn_entered","1")}localStorage.getItem("keshawn_entered")==="1"?c?.remove():(h?.addEventListener("click",u),y?.addEventListener("click",u));document.querySelector("#year").textContent=String(new Date().getFullYear());document.querySelector("#workGrid").innerHTML=b.map(s=>{const a=(s.links||[]).map(t=>{const e=t.href.startsWith("#")?"":' target="_blank" rel="noreferrer"';return`<a class="btn btn--outline btn--sm" href="${t.href}"${e}>${t.label}</a>`}).join("");return`
      <article class="card">
        <div class="workTop">
          <div>
            <div class="workTitle">${s.title}</div>
            <div class="muted" style="margin-top:6px">${s.subtitle}</div>
          </div>
          <div class="pill">${s.metric}</div>
        </div>
        <p class="muted" style="margin-top:12px;line-height:1.7">${s.description}</p>
        <div class="actions">${a}</div>
      </article>
    `}).join("");g({hamburgerId:"hamburger",mobileNavId:"mobileNav"});const v=document.getElementById("site"),_=document.getElementById("skipLink");function m(){c?.classList.add("enter--hide"),v?.classList.remove("site--hidden"),document.body.classList.remove("no-scroll"),localStorage.setItem("keshawn_entered","1")}localStorage.getItem("keshawn_entered")==="1"?(c?.remove(),v?.classList.remove("site--hidden")):(document.body.classList.add("no-scroll"),h?.addEventListener("click",m),_?.addEventListener("click",m));document.querySelector("#quickForm").addEventListener("submit",s=>{s.preventDefault();const a=new FormData(s.currentTarget),t=String(a.get("name")||"").trim(),n=String(a.get("topic")||"").trim(),e=String(a.get("message")||"").trim(),i=encodeURIComponent(`[Website] ${n}`),o=encodeURIComponent(`Hi Ke'Shawn,

My name is ${t}.

${e}

Best,
${t}
`);window.location.href=`mailto:${l}?subject=${i}&body=${o}`});
