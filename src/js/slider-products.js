import Swiper, { Loop } from "swiper";
import "swiper/css/bundle";

const swiper = new Swiper(".products-list-slider", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 4,
});
