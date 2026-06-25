document.addEventListener("DOMContentLoaded", function () {
  // Получаем все кнопки для открытия модального окна
  const openModalBtns = document.querySelectorAll(".openModalBtn");
  // Получаем все модальные окна с видео
  const videoModals = document.querySelectorAll(".videoModal");
  // Получаем кнопку для закрытия модального окна
  const closeModalBtn = document.getElementById("closeModalBtn");
  // Получаем все элементы с видео-плеерами
  const videoPlayers = document.querySelectorAll(".videoPlayer");
  // Получаем элемент body для блокировки/разблокировки прокрутки
  const body = document.body;

  // Функция для блокировки прокрутки
  function disableScroll() {
    body.style.overflow = "hidden";
  }

  // Функция для разблокировки прокрутки
  function enableScroll() {
    body.style.overflow = "";
  }

  // Добавляем обработчик события для каждой кнопки открытия модального окна
  openModalBtns.forEach(function (openModalBtn) {
    openModalBtn.addEventListener("click", function () {
      // При клике на кнопку отображаем все модальные окна и блокируем прокрутку
      videoModals.forEach(function (videoModal) {
        videoModal.style.display = "block";
        disableScroll();
      });
    });
  });

  // Добавляем обработчик события для кнопки закрытия модального окна
  closeModalBtn.addEventListener("click", function () {
    // При закрытии модального окна скрываем его, разблокируем прокрутку и останавливаем видео
    videoModals.forEach(function (videoModal, index) {
      videoModal.style.display = "none";
      enableScroll();
      videoPlayers[index].pause();
      videoPlayers[index].currentTime = 0;
    });
  });

  // Добавляем обработчик события для клика по области вне модального окна
  window.addEventListener("click", function (event) {
    videoModals.forEach(function (videoModal, index) {
      // Если клик произошел вне модального окна, то скрываем его, разблокируем прокрутку и останавливаем видео
      if (event.target === videoModal) {
        videoModal.style.display = "none";
        enableScroll();
        videoPlayers[index].pause();
        videoPlayers[index].currentTime = 0;
      }
    });
  });
});
