// import Swiper from "swiper";
import Swiper, { Autoplay } from "swiper";
import "swiper/css/bundle";

const swiper = new Swiper(".gallery-bottom-slider", {
  loop: true,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay],
});
