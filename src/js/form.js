const formOpen = document.querySelector(".header-right__link");
const formClose = document.querySelector(".popup__btn");
const popupForm = document.querySelector(".popup");

formOpen.addEventListener("click", openModal);
formClose.addEventListener("click", closeModal);

function windowModalRemoveEventlistener() {
  window.removeEventListener("keydown", closeModalEscape);
  popupForm.removeEventListener("click", closeModalClickBackdrop);
}

function toggleModal() {
  popupForm.classList.toggle("popup--visible");
  document.body.classList.toggle("popup-form-open");
}

function openModal() {
  window.addEventListener("keydown", closeModalEscape);
  popupForm.addEventListener("click", closeModalClickBackdrop);
  toggleModal();
}

function closeModal() {
  toggleModal();
  windowModalRemoveEventlistener();
}

function closeModalEscape(e) {
  if (e.code === "Escape") {
    toggleModal();
    windowModalRemoveEventlistener();
  }
}

function closeModalClickBackdrop(e) {
  if (e.target === e.currentTarget) {
    toggleModal();
    windowModalRemoveEventlistener();
  }
}

// headerBasket.addEventListener("click", () => {
//   headerBasket.classList.toggle("header-right__link--open");
//   popupForm.classList.toggle("popup--visible");
//   document.body.classList.toggle("popup-form-open");
// });

// formBtnCross.addEventListener("click", () => {
//   formBtnCross.classList.toggle("popup__btn--close");
//   popupForm.classList.remove("popup--visible");
//   document.body.classList.remove("popup-form-open");
// });

// function closeModalEscape(e) {
//   if (e.code === "Escape") {
//     toggleModal();
//     windowModalRemoveEventListener();
//   }
// }

// function closeModalCLickBackdrop(e) {
//   if (e.target === e.currentTarget) {
//     toggleModal();
//     windowModalRemoveEventListener();
//   }
// }
