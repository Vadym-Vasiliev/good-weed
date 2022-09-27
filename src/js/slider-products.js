import Swiper, { Loop } from "swiper";
import "swiper/css/bundle";

const swiper = new Swiper(".products-list-slider", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 4,

  breakpoints: {
    768: {
      slidesPerView: 4,
    },

    480: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
