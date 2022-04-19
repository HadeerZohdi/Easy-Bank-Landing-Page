const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("close-icon");

menuIcon.onclick = function () {
  menuIcon.style.display = "none";
  navMenu.style.display = "block";
  closeIcon.style.display = "block";
};

closeIcon.onclick = function () {
  navMenu.style.display = "none";
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
};
