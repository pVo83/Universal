document.addEventListener("DOMContentLoaded", () => {
  const tabsContentContainer = document.querySelector(".hero__tabs-content");
  const tabsList = document.querySelector(".hero__tabs-list");

  if (!tabsContentContainer || !tabsList) {
    return;
  }

  const tabContents = tabsContentContainer.querySelectorAll(".tab-content");
  const tabs = tabsList.querySelectorAll('[role="tab"]');

  const handleTabs = (index) => {
    tabContents.forEach((tabContent) => {
      const isActive = tabContent === tabContents[index];
      tabContent.classList.toggle("is-active", isActive);
      tabContent.toggleAttribute("hidden", !isActive);
    });

    const selectedTabContent = tabContents[index];

    if (selectedTabContent) {
      const animatedElements = [
        selectedTabContent.querySelector(".tab-content__subtitle"),
        selectedTabContent.querySelector(".tab-content__title"),
        selectedTabContent.querySelector(".post"),
      ];

      animatedElements.forEach((element) => element?.classList.add("active"));

      setTimeout(() => {
        animatedElements.forEach((element) => element?.classList.remove("active"));
      }, 0);
    }

    tabs.forEach((tab, tabIndex) => {
      const isSelected = tabIndex === index;
      tab.classList.toggle("active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
      tab.setAttribute("tabindex", isSelected ? "0" : "-1");
    });
  };

  tabsList.addEventListener("click", (event) => {
    const clickedTab = event.target.closest('[role="tab"]');

    if (!clickedTab || event.target.closest("a")) {
      return;
    }

    handleTabs([...tabs].indexOf(clickedTab));
  });

  tabsList.addEventListener("keydown", (event) => {
    const currentTab = event.target.closest('[role="tab"]');

    if (!currentTab) {
      return;
    }

    const currentIndex = [...tabs].indexOf(currentTab);
    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case "Home":
        event.preventDefault();
        nextIndex = 0;
        break;
      case "End":
        event.preventDefault();
        nextIndex = tabs.length - 1;
        break;
      case "Enter":
      case " ":
        event.preventDefault();
        handleTabs(currentIndex);
        return;
      default:
        return;
    }

    handleTabs(nextIndex);
    tabs[nextIndex].focus();
  });

  handleTabs(0);
});
