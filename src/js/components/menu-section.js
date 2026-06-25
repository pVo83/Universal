const burgerSections = document.getElementById("burger-sections");
const menuSections = document.getElementById("menu-sections");

burgerSections.addEventListener("click", () => {
  menuSections.classList.toggle("menu-sections_active");
});

// Добавляем слушатель событий на изменение размера окна
window.addEventListener("resize", () => {
  // Проверяем ширину окна
  if (window.innerWidth <= 1024) {
    // Убираем активный класс, если окно меньше или равно 1024px
    menuSections.classList.remove("menu-sections_active");
  }
});
