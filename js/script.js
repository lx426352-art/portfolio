const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Extra 2: Contact form message
const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.textContent = "Message sent successfully!";
  form.reset();
});

// Extra 3: Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Extra 4: Dynamic year
document.querySelector("footer p").innerHTML =
  `© ${new Date().getFullYear()} Vo Xuan Long`;
