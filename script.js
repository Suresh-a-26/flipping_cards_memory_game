const resultDisplay = document.getElementById("score");
const gridDisplay = document.getElementById("grid");
const finalDisplay = document.getElementById("final-display");

const cardArray = [
  {
    name: "mg-1",
    img: "mg-1.jpg",
  },
  {
    name: "mg-2",
    img: "mg-2.png",
  },
  {
    name: "mg-3",
    img: "mg-3.jpg",
  },
  {
    name: "mg-4",
    img: "mg-4.jpg",
  },
  {
    name: "mg-5",
    img: "mg-5.jpg",
  },
  {
    name: "mg-6",
    img: "mg-6.jpg",
  },
  {
    name: "mg-1",
    img: "mg-1.jpg",
  },
  {
    name: "mg-2",
    img: "mg-2.png",
  },
  {
    name: "mg-3",
    img: "mg-3.jpg",
  },
  {
    name: "mg-4",
    img: "mg-4.jpg",
  },
  {
    name: "mg-5",
    img: "mg-5.jpg",
  },
  {
    name: "mg-6",
    img: "mg-6.jpg",
  },
];
cardArray.sort(() => 0.5 - Math.random());
generateBoard();
function generateBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "red.avif");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.append(card);
  }
}

cardChosen = [];
cardChosenId = [];
function flipCard() {
  const card_id = this.getAttribute("data-id");
  this.setAttribute("src", cardArray[card_id].img);
  cardChosenId.push(card_id);
  cardChosen.push(cardArray[card_id].name);
  if (cardChosen.length == 2) {
    setTimeout(checkMatch, 300);
  }
}
cardsWon = [];
function checkMatch() {
  const cards = document.querySelectorAll("img");
  if (cardChosen[0] == cardChosen[1]) {
    cards[cardChosenId[0]].setAttribute("src", "green.jpg");
    cards[cardChosenId[1]].setAttribute("src", "green.jpg");
    cards[cardChosenId[0]].removeEventListener("click", flipCard);
    cards[cardChosenId[1]].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen);
    resultDisplay.innerHTML = cardsWon.length + " Out Of 6";
  } else {
    cards[cardChosenId[0]].setAttribute("src", "red.avif");
    cards[cardChosenId[1]].setAttribute("src", "red.avif");
  }
  cardChosen = [];
  cardChosenId = [];
  if (cardsWon.length == cardArray.length / 2) {
    finalDisplay.innerHTML =
      "Congratulations You Have Successfully Completed The Game";
  }
}
