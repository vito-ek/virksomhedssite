function toggleMenu() {
  const menu = document.getElementById("menu");
  const burger = document.getElementById("burger");
  menu.classList.toggle("active");
  if (menu.classList.contains("active")) {
    burger.innerHTML = "✕";
  } else {
    burger.innerHTML = "☰";
  }
}
