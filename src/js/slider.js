import $ from "jquery";
import "slick-carousel";

$(".gallery-bottom-slider").slick({
  autoplay: true,
  autoplaySpeed: 0,
  speed: 30000,
});

$(".products-list-slider").slick({
  dots: true,
  speed: 1500,
});
