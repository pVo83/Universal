// Выбираем все элементы с классом "bookmark" и сохраняем их в переменной bookmarks
const bookmarks = document.querySelectorAll(".bookmark");

// Переменная для отслеживания текущего активного элемента
let activeBookmark = null;

// Функция для обработки события click
function handleBookmarkClick(clickedBookmark) {
  // Проверяем, есть ли уже активный элемент
  if (activeBookmark === clickedBookmark) {
    // Если текущий элемент уже активен, выключаем активный класс
    clickedBookmark.classList.remove("bookmark--active");
    activeBookmark = null;
  } else {
    // Иначе, выключаем активный класс предыдущего элемента (если есть)
    if (activeBookmark) {
      activeBookmark.classList.remove("bookmark--active");
    }

    // Переключаем класс "bookmark--active" для текущего элемента
    clickedBookmark.classList.add("bookmark--active");

    // Устанавливаем текущий активный элемент в текущий "bookmark"
    activeBookmark = clickedBookmark;
  }
}

// Для каждого элемента с классом "bookmark" добавляем слушатель события click
bookmarks.forEach((bookmark) => {
  bookmark.addEventListener("click", function () {
    // Вызываем функцию для обработки события click
    handleBookmarkClick(bookmark);
  });
});
