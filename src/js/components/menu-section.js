const burgerSections = document.getElementById("burger-sections");
const menuSections = document.getElementById("menu-sections");

const setSectionsMenuState = (isOpen) => {
  menuSections.classList.toggle("menu-sections_active", isOpen);
  burgerSections.setAttribute("aria-expanded", String(isOpen));
  burgerSections.setAttribute("aria-label", isOpen ? "Close sections menu" : "Open sections menu");
};

burgerSections.addEventListener("click", () => {
  const isOpen = !menuSections.classList.contains("menu-sections_active");
  setSectionsMenuState(isOpen);
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 1024) {
    setSectionsMenuState(false);
  }
});
