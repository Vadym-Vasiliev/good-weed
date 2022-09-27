// import Swiper from "swiper";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";

const swiper = new Swiper(".gallery-bottom-slider", {
  modules: [Navigation, Pagination],
  loop: true,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
