const posts = [
  {
    title: "My First Blog Post",
    date: "November 1, 2025",
    excerpt: "This is my very first blog post. Here I show my journey as a programmer.",
  }
];

const postList = document.getElementById("post-list");

if (postList) {
  posts.forEach(post => {
    const postEl = document.createElement("div");
    postEl.classList.add("post");
    postEl.innerHTML = `
      <h2><a href="${post.link}">${post.title}</a></h2>
      <p class="date">${post.date}</p>
      <p>${post.excerpt}</p>
    `;
    postList.appendChild(postEl);
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
      contactForm.reset();
    } else {
      status.textContent = "Please fill in all fields.";
      status.style.color = "red";
    }
  });
}
