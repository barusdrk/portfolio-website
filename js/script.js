// Toggle menu for mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// Contact form submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");

    if (name && email && message) {
      status.textContent = "Message sent successfully!";
      status.style.color = "green";
      contactForm.reset();
    } else {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
    }
  });
}
