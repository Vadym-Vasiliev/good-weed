const buttonAddCards = document.querySelectorAll(".products-list__btn");
const basketCount = document.querySelector("#basket");
const basketModal = document.querySelector(".header-right__link");
const basketCardsContent = document.querySelector(".popup-left-list");
const basketTotalPrice = document.querySelector(".popup-left__price");

// загрузка даних
window.addEventListener("load", () => {
  let cardsString = localStorage.getItem("cards");

  if (cardsString) {
    let cards = JSON.parse(cardsString);

    basketCount.innerHTML = cards.length;

    localStorage.setItem("cards", JSON.stringify(cards));
  } else {
    basketCount.innerHTML = 0;
  }
});

// додавання карток в корзину
buttonAddCards.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    const currentButton = event.target;

    const btnData = {
      img: currentButton.dataset.cardImg,
      title: currentButton.dataset.cardTitle,
      text: currentButton.dataset.cardText,
      price: currentButton.dataset.cardPrice,
      id: currentButton.dataset.cardId,
    };

    let cardsString = localStorage.getItem("cards");
    let cards = [];

    if (cardsString) {
      cards = JSON.parse(cardsString);
    }
    cards.push(btnData);

    localStorage.setItem("cards", JSON.stringify(cards));

    basketCount.innerHTML = cards.length;
  });
});

// відмалювання карток в корзині
basketModal.addEventListener("click", () => {
  let cardsString = localStorage.getItem("cards");
  let cards = JSON.parse(cardsString);
  let totalPrice = 0;

  const showInHtml = cards.map((el, i) => {
    totalPrice = totalPrice + Number(el.price);

    return `<li class="popup-left-list__item" id="">
            <button type="button" class="popup-left-list__delete">
              <svg class="popup-left-list__svg" width="15" height="17">
                <use href="img/icons/icons.svg#delete"></use>
            </button>
            <div class="popup-left-list__img">
              <img src="${el.img}" alt="cannabis">
            </div>
            <div class="popup-left-list__content">
              <div class="popup-left-list__abbr">
                <p>${el.title}</p>
              </div>
              <div class="popup-left-list__text">
                <p>${el.text}</p>
              </div>
              <div class="popup-left-list__price">
                <p>price: 
                  <span>${el.price}</span>
                </p>
              </div>
            </div>
          </li>`;
  });

  basketTotalPrice.innerHTML = totalPrice;

  basketCardsContent.innerHTML = showInHtml.join("");

  // видалення картки в корзині
  const basketBtnDelete = document.querySelectorAll(".popup-left-list__delete");

  basketBtnDelete.forEach((btn) => {
    btn.addEventListener("click", () => {
      const index = [...btn.closest(".popup-left-list").children].indexOf(
        btn.parentElement
      );

      let cardsString = localStorage.getItem("cards");
      let cards = JSON.parse(cardsString);

      const deletedCards = cards.splice(index, 1);

      localStorage.setItem("cards", JSON.stringify(cards));

      basketCount.innerHTML = cards.length;

      basketTotalPrice.innerHTML =
        basketTotalPrice.innerHTML - deletedCards[0].price;

      btn.parentElement.remove();
    });
  });
});
