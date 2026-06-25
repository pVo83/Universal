const burgerMobile = document.getElementById("burger-mobile");
const menuMobile = document.getElementById("menu-mobile");
const cover = document.getElementById("cover");

burgerMobile.addEventListener("click", () => {
  menuMobile.classList.toggle("menu-mobile_active");
  cover.classList.toggle("cover--active");
  document.body.classList.toggle("stop-scroll");
});

cover.addEventListener("click", () => {
  menuMobile.classList.remove("menu-mobile_active");
  cover.classList.remove("cover--active");
  document.body.classList.remove("stop-scroll");
});

// Добавляем слушатель событий на изменение размера окна
window.addEventListener("resize", () => {
  // Проверяем ширину окна
  if (window.innerWidth >= 1024) {
    // Убираем активный класс, если окно меньше или равно 1024px
    menuMobile.classList.remove("menu-mobile_active");
    document.body.classList.remove("stop-scroll");
    cover.classList.remove("cover--active");
  }
});
