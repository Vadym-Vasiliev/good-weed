const buttonAddCards = document.querySelectorAll(".products-list__btn");

buttonAddCards.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    const currentButton = event.target;
    currentButton.dataset.cardImg;
    console.log(currentButton);
  });
});
