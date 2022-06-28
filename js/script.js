let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".links-main");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
})