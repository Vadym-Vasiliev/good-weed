// import Swiper from "swiper";
import { speed } from "jquery";
import Swiper, { Autoplay } from "swiper";
import "swiper/css/bundle";

const swiper = new Swiper(".gallery-bottom-slider", {
  loop: true,
  spaceBetween: 24,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  speed: 30000,

  modules: [Autoplay],
});
