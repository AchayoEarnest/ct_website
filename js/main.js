document.addEventListener("DOMContentLoaded", () => {
  const courses = [
    { id: 1, name: "Web Development", price: 100, icon: "fa-laptop-code" },
    { id: 2, name: "Data Analysis", price: 120, icon: "fa-chart-line" },
    { id: 3, name: "Cyber Security", price: 150, icon: "fa-shield-alt" },
    { id: 4, name: "Computer Packages", price: 80, icon: "fa-file-alt" },
    { id: 5, name: "Music Production", price: 150, icon: "fa-music" },
    { id: 6, name: "Filming", price: 150, icon: "fa-video" },
    {
      id: 7,
      name: "Professional Foundations",
      price: 150,
      icon: "fa-briefcase",
    },
    { id: 8, name: "Graphic Design", price: 150, icon: "fa-image" },
    { id: 9, name: "Content Creation", price: 150, icon: "fa-pen-nib" },
    { id: 10, name: "Virtual Assistant", price: 150, icon: "fa-user-tie" },
  ];

  // ---- Courses Page ----
  const courseList = document.getElementById("courseList");
  if (courseList) {
    courseList.innerHTML = courses
      .map(
        (c) => `
      <div class="course-card">
        <i class="fas ${c.icon} course-icon"></i>
        <h3>${c.name}</h3>
        <p>Price: $${c.price}</p>
        <button onclick="addToCart(${c.id})">Add to Cart</button>
      </div>
    `
      )
      .join("");
  }

  // ---- Cart ----
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  window.addToCart = (id) => {
    const course = courses.find((c) => c.id === id);
    if (!cart.find((item) => item.id === id)) {
      cart.push(course);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${course.name} added to cart.`);
      updateCartUI();
    } else {
      alert("This course is already in your cart.");
    }
  };

  window.removeFromCart = (id) => {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      const removed = cart.splice(index, 1)[0];
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartUI();
    }
  };

  window.payCart = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (savedCart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    const phoneInput = document.getElementById("mpesaPhone");
    const phoneNumber = phoneInput.value.trim();
    if (!phoneNumber.match(/^07\d{8}$/)) {
      alert("Enter a valid Kenyan phone number (07XXXXXXXX).");
      phoneInput.focus();
      return;
    }

    const total = savedCart.reduce((sum, item) => sum + item.price, 0);
    const confirmPayment = confirm(
      `STK Push simulated: Send $${total} request to ${phoneNumber}?`
    );
    if (confirmPayment) {
      alert("Payment successful!");
      localStorage.removeItem("cart");
      updateCartUI();
    }
  };

  function updateCartUI() {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cartItems) {
      if (savedCart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        if (cartTotal) cartTotal.innerHTML = "";
      } else {
        cartItems.innerHTML = savedCart
          .map(
            (item) => `
          <div class="course-card">
            <i class="fas ${item.icon} course-icon"></i>
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        `
          )
          .join("");

        const total = savedCart.reduce((sum, item) => sum + item.price, 0);
        if (cartTotal) {
          cartTotal.innerHTML = `
            <h3>Total: $${total}</h3>
            <input type="tel" id="mpesaPhone" placeholder="Enter your phone number" style="padding:10px; width:200px; border-radius:6px; margin:10px 0;">
            <br>
            <button class="mpesa-btn" onclick="payCart()">
              <i class="fas fa-money-bill-wave"></i> Pay with MPESA
            </button>
          `;
        }
      }
    }
  }

  updateCartUI();

  // ---- Dark/Light Mode ----
  const toggle = document.getElementById("themeToggle");
  const currentTheme = localStorage.getItem("theme");
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

  // ---- Form submission alerts ----
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Form submitted successfully!");
      form.reset();
    });
  });
});
