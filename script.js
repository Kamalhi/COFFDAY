// Untuk Header
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgba(249, 249, 249, 1)";
  } else {
    header.style.backgroundColor = "rgba(249, 249, 249, 0.4)";
  }
});
