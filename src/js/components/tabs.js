// Ждем, пока загрузится весь HTML документ
document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылку на контейнер с содержимым табов
  const tabsContentContainer = document.querySelector(".hero__tabs-content");

  // Получаем все элементы содержимого табов
  const tabContents = tabsContentContainer.querySelectorAll(".tab-content");

  // Получаем ссылку на список табов
  const tabsList = document.querySelector(".hero__tabs-list");

  // Получаем все элементы табов в списке
  const tabs = tabsList.querySelectorAll(".tab");

  // Добавляем обработчик события "клик" на список табов
  tabsList.addEventListener("click", function (event) {
    // Получаем ближайший таб, на который был произведен клик
    const clickedTab = event.target.closest(".tab");

    // Если таб найден, обрабатываем его
    if (clickedTab) {
      // Получаем индекс таба в списке
      const tabIndex = Array.from(clickedTab.parentElement.children).indexOf(clickedTab);

      // Вызываем функцию для обработки табов с передачей индекса
      handleTabs(tabIndex);
    }
  });

  // Функция для обработки табов по переданному индексу
  function handleTabs(index) {
    // Скрываем все элементы содержимого табов
    tabContents.forEach((tabContent) => {
      tabContent.style.display = "none";
    });

    // Получаем выбранный элемент содержимого таба
    const selectedTabContent = tabsContentContainer.querySelector(`.tab-content_tab${index + 1}`);

    // Если элемент содержимого найден
    if (selectedTabContent) {
      // Функция для добавления или удаления класса active
      const addRemoveActiveClass = (element, action) => {
        element.classList[action]("active");
      };

      // Добавляем класс active для активации анимации
      addRemoveActiveClass(selectedTabContent.querySelector('.tab-content__subtitle'), 'add');
      addRemoveActiveClass(selectedTabContent.querySelector('.tab-content__title'), 'add');
      addRemoveActiveClass(selectedTabContent.querySelector('.post'), 'add');

      // Задержка для перезапуска анимации
      setTimeout(() => {
        addRemoveActiveClass(selectedTabContent.querySelector('.tab-content__subtitle'), 'remove');
        addRemoveActiveClass(selectedTabContent.querySelector('.tab-content__title'), 'remove');
        addRemoveActiveClass(selectedTabContent.querySelector('.post'), 'remove');
      }, 0);

      // Отображаем выбранный элемент содержимого
      selectedTabContent.style.display = "flex";
    }

    // Убираем класс active у всех элементов табов в списке
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });

    // Добавляем класс active выбранному табу в списке
    const selectedTab = tabsList.querySelector(`.tab_list${index + 1}`);
    if (selectedTab) {
      selectedTab.classList.add("active");
    }
  }

  // Получаем первый таб и его индекс для установки начального состояния
  const initialTab = tabsList.querySelector(".tab");
  if (initialTab) {
    const initialTabIndex = Array.from(initialTab.parentElement.children).indexOf(initialTab);
    // Вызываем функцию для установки начального состояния
    handleTabs(initialTabIndex);
  }
});

