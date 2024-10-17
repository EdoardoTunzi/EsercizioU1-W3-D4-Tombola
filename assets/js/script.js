// funzione che genera il tabellone
const generateBoard = function () {
  const board = document.getElementById("board");

  for (let i = 1; i < 91; i++) {
    let numCell = document.createElement("h3");
    numCell.classList.add("cell");
    numCell.innerText = i;

    board.appendChild(numCell);
  }
};
//array per tenere traccia dei numeri estratti
const extractedNumbers = [];
//funzione che genera numero random 1 a 90
const generateRandomNum = function () {
  const randomNum = document.getElementById("randomNum");
  let randomGenNum = Math.floor(Math.random() * 90) + 1;

  while (!extractedNumbers.includes(randomGenNum)) {
    randomNum.innerText = randomGenNum;
    extractedNumbers.push(randomGenNum);
    break;
  }
  console.log(extractedNumbers);
};

const randomBtn = document.getElementById("randomBtn");
randomBtn.onclick = function () {
  generateRandomNum();
};

window.onload = () => {
  generateBoard();
};
