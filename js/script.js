/* =========================================================
   TRACES - js/script.js (shared by the 3 pages)
   Feature 1: dark / light toggle, remembered with localStorage
   Feature 2: reading progress bar driven by scroll position
   Feature 3: contact form feedback (about page only)
   ========================================================= */

/* ---------- FEATURE 1: THEME TOGGLE ---------- */
const root = document.documentElement;          // the <html> element
const toggle = document.getElementById("theme-toggle");

// Read the saved choice (or "light" if nothing saved yet)
let theme = localStorage.getItem("theme") || "light";
applyTheme(theme);

function applyTheme(name) {
  root.setAttribute("data-theme", name);         // CSS reacts to this attribute
  toggle.textContent = name === "dark" ? "light" : "dark";
}

toggle.addEventListener("click", function () {
  theme = theme === "dark" ? "light" : "dark";   // flip the value
  localStorage.setItem("theme", theme);          // remember it for the next page
  applyTheme(theme);
});

/* ---------- FEATURE 2: READING PROGRESS BAR ---------- */
const bar = document.getElementById("progress");

window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;                                   // pixels scrolled
  const total = document.body.scrollHeight - window.innerHeight;     // scrollable distance
  const percent = total > 0 ? (scrolled / total) * 100 : 0;          // 0 to 100
  bar.style.width = percent + "%";
});

/* ---------- FEATURE 3: CONTACT FORM (about page only) ---------- */
const form = document.getElementById("contact-form");

if (form) {                                      // other pages have no form
  const nameField = document.getElementById("name");
  const message = document.getElementById("message");
  const count = document.getElementById("count");
  const feedback = document.getElementById("form-status");

  // Live character counter: runs every time the user types
  message.addEventListener("input", function () {
    count.textContent = message.value.length;
  });

  // Runs only if the browser's native validation passed
  // (required, type="email", minlength are checked by the browser itself)
  form.addEventListener("submit", function (event) {
    event.preventDefault();                      // no server: stay on the page
    const name = nameField.value.trim() || "reader";
    // textContent (not innerHTML): what the user typed is never run as HTML
    feedback.textContent = "Thank you, " + name + ". Your message is valid, " +
      "but nothing was sent: this demo has no server.";
    form.reset();
    count.textContent = "0";
  });
}

/* ---------- FEATURE 4: HERO TYPEWRITER (index page only) ---------- */

/* -- Typewriter -- */
const typeTarget = document.querySelector(".typewriter");

if (typeTarget) {
  const word = "traces";
  let i = 0;

  function type() {
    if (i <= word.length) {
      typeTarget.textContent = word.slice(0, i);
      i++;
      setTimeout(type, i === 1 ? 400 : 120); // initial delay, then per-char pace
    }
  }

  setTimeout(type, 600); // wait for label fade-in
}

