document.addEventListener("DOMContentLoaded", () => {
  console.log("Cahayo Techlinks loaded.");

  // Sample courses
  const courses = [
    { id: 1, name: "Web Development", price: 100 },
    { id: 2, name: "Data Analysis", price: 120 },
    { id: 3, name: "Cyber Security", price: 150 },
    { id: 3, name: "Computer Packages", price: 150 },
    { id: 3, name: "Music Production", price: 150 },
    { id: 3, name: "Filming", price: 150 },
    { id: 3, name: "Proffesional Foundations", price: 150 },
  ];

  // Show courses
  const courseList = document.getElementById("courseList");
  if (courseList) {
    courseList.innerHTML = courses.map(c => `
      <div class="course-card">
        <h3>${c.name}</h3>
        <p>Price: $${c.price}</p>
        <button onclick="addToCart(${c.id})">Add to Cart</button>
      </div>
    `).join("");
  }

  // Cart
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  window.addToCart = (id) => {
    const course = courses.find(c => c.id === id);
    if (!cart.find(item => item.id === id)) {
      cart.push(course);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${course.name} added to cart.`);
    } else {
      alert("This course is already in your cart.");
    }
  };

  // Show cart items
  const cartItems = document.getElementById("cartItems");
  if (cartItems && cart.length > 0) {
    cartItems.innerHTML = cart.map(item => `
      <div class="course-card">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `).join("");
  }

  // Form alerts
  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Form submitted successfully!");
      form.reset();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Cahayo Techlinks loaded.");

  // ---- DARK/LIGHT MODE ----
  const toggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme");

  // Apply saved theme
  if (currentTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.textContent = "☀️";
  }

  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      localStorage.setItem("theme", isDark ? "dark" : "light");
      toggle.textContent = isDark ? "☀️" : "🌙";
    });
  }

  // ---- COURSE + CART FUNCTIONALITY ----
  const courses = [
    { id: 1, name: "Web Development", price: 100 },
    { id: 2, name: "Data Analysis", price: 120 },
    { id: 3, name: "Cyber Security", price: 150 },
    { id: 3, name: "Computer Packages", price: 150 },
    { id: 3, name: "Music Production", price: 150 },
    { id: 3, name: "Filming", price: 150 },
    { id: 3, name: "Proffesional Foundations", price: 150 },
     { id: 3, name: "Graphic Design", price: 150 },
    { id: 3, name: "Content Creation", price: 150 },
    { id: 3, name: "Vistual Assistant", price: 150 },
  ];

  const courseList = document.getElementById("courseList");
  if (courseList) {
    courseList.innerHTML = courses.map(c => `
      <div class="course-card">
        <h3>${c.name}</h3>
        <p>Price: $${c.price}</p>
        <button onclick="addToCart(${c.id})">Add to Cart</button>
      </div>
    `).join("");
  }

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  window.addToCart = (id) => {
    const course = courses.find(c => c.id === id);
    if (!cart.find(item => item.id === id)) {
      cart.push(course);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${course.name} added to cart.`);
    } else {
      alert("This course is already in your cart.");
    }
  };

  const cartItems = document.getElementById("cartItems");
  if (cartItems && cart.length > 0) {
    cartItems.innerHTML = cart.map(item => `
      <div class="course-card">
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `).join("");
  }

  document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Form submitted successfully!");
      form.reset();
    });
  });
});

