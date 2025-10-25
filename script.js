// Animasi scroll muncul
const scrollElements = document.querySelectorAll(".scroll-fade");
window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;
  scrollElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add("show");
    }
  });
});

// Newsletter
document.getElementById("newsletter-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Terima kasih! Email Anda telah terdaftar.");
  e.target.reset();
});
