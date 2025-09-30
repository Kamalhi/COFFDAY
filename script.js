// Untuk Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(249, 249, 249, 1)";
  } else {
    header.style.backgroundColor = "rgba(249, 249, 249, 0.4)";
  }
});

// untuk menu-icon toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

const menuIcon = `
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />`;

const closeIcon = `<path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M6 18 18 6M6 6l12 12"
  />`;

function toggleMenu() {
  navMenu.classList.toggle("active");

  const icon = menuToggle.querySelector("path");
  if (navMenu.classList.contains("active")) {
    menuToggle.innerHTML = closeIcon;
  } else {
    menuToggle.innerHTML = menuIcon;
  }
}

menuToggle.addEventListener("click", toggleMenu);

const menuItems = navMenu.querySelectorAll("a");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.innerHTML = menuIcon;
  });
});
