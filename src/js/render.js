const buttonAddCards = document.querySelectorAll(".products-list__btn");
const basketCount = document.querySelector("#basket");
const cards = [];

buttonAddCards.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (event) => {
    const currentButton = event.target;

    const btnData = {
      img: currentButton.dataset.cardImg,
      title: currentButton.dataset.cardTitle,
      text: currentButton.dataset.cardText,
      price: currentButton.dataset.cardPrice,
      id: currentButton.dataset.cardId,
    };

    cards.push(btnData);

    basketCount.innerHTML = cards.length;
  });
});

// 1. масив кардс замінити на локалстродж( пушити в локалстродж)
// localStorage.setItem('cards', [btnData])
//
