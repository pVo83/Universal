const burgerMobile = document.getElementById("burger-mobile");
const menuMobile = document.getElementById("menu-mobile");
const cover = document.getElementById("cover");

const setMobileMenuState = (isOpen) => {
  menuMobile.classList.toggle("menu-mobile_active", isOpen);
  cover.classList.toggle("cover--active", isOpen);
  document.body.classList.toggle("stop-scroll", isOpen);
  burgerMobile.setAttribute("aria-expanded", String(isOpen));
  burgerMobile.setAttribute("aria-label", isOpen ? "Close mobile menu" : "Open mobile menu");
};

burgerMobile.addEventListener("click", () => {
  const isOpen = !menuMobile.classList.contains("menu-mobile_active");
  setMobileMenuState(isOpen);
});

cover.addEventListener("click", () => {
  setMobileMenuState(false);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    setMobileMenuState(false);
  }
});
