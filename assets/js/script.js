//array per tenere traccia dei numeri estratti
const extractedNumbers = [];
// funzione che genera il tabellone
const generateBoard = function () {
  const board = document.getElementById("board");
  board.innerHTML = ""; //pulisco l'html perche rigenero la funzione quando genero un numero col button
  for (let i = 1; i < 91; i++) {
    let numCell = document.createElement("h3");
    numCell.classList.add("cell");
    numCell.innerText = i;
    //creo un if per controllare che il numero generato sia presente nell'array di numeri estratti e nel caso gli faccio cambiare sfondo
    if (extractedNumbers.includes(i)) {
      numCell.style.backgroundColor = "coral";
    }
    board.appendChild(numCell);
  }
};

//funzione che genera numero random 1 a 90
const generateRandomNum = function () {
  const randomNum = document.getElementById("randomNum");
  let randomGenNum = Math.floor(Math.random() * 90) + 1;

  if (!extractedNumbers.includes(randomGenNum)) {
    randomNum.innerText = randomGenNum;
    extractedNumbers.push(randomGenNum);
    generateBoard(); // rigenero la board con il numero evidenziato grazie al controllo if in generateBoard()
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
