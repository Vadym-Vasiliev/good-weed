const burgerBtn = document.querySelector(".header-burger");
const burgerMenu = document.querySelector(".header-menu");
const burgerListItem = document.querySelectorAll(".header-list__item");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("header-burger--open");
  burgerMenu.classList.toggle("header-menu--open");
  document.body.classList.toggle("header-menu-open");
});

burgerListItem.forEach((item) => {
  item.addEventListener("click", () => {
    burgerBtn.classList.remove("header-burger--open");
    burgerMenu.classList.remove("header-menu--open");
    document.body.classList.remove("header-menu-open");
  });
});
