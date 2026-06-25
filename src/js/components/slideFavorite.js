import Swiper, { Pagination, Keyboard, Mousewheel } from "swiper";
Swiper.use([Pagination, Keyboard, Mousewheel]);
const swiper = new Swiper(".slideFavorite", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    forceToAxis: true,
  },
  freeMode: true,
  speed: 700,
  loop: true,
  pagination: {
    el: ".favorite-pagination",
    clickable: true,
  },
});