let board = document.getElementById("gridcontainer");
let sizeOptions = document.getElementById("gridoptions");
let currentBoard = document.querySelector(".currentsize");
let currentSetting = document.querySelector(".currentsetting");
let buttons = document.querySelector(".buttons");
let blackBtn = document.createElement("button");
buttons.appendChild(blackBtn).classList.add("blackbutton");
blackBtn.textContent = "Black";
let grayBtn = document.createElement("button");
buttons.appendChild(grayBtn).classList.add("graybutton");
grayBtn.textContent = "Gray";
let colorBtn = document.createElement("button");
buttons.appendChild(colorBtn).classList.add("colorbutton");
colorBtn.textContent = "Color";
let eraserBtn = document.createElement("button");
buttons.appendChild(eraserBtn).classList.add("eraserbutton");
eraserBtn.textContent = "Eraser";
let clearBoard = document.createElement("button");
buttons.appendChild(clearBoard).classList.add("clearboard");
clearBoard.textContent = "Clear Board";

createDivs(16);

function getOption() {
  selectElement = document.querySelector(".options");
  output = selectElement.value;
  createDivs(output);
  currentBoard.textContent = `${output} x ${output}`;
  currentSetting.textContent = "";
}

function createDivs(value) {
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  let amount = value * value;
  board.style.gridTemplateColumns = `repeat(${value},1fr)`;
  board.style.gridTemplateRows = `repeat(${value},1fr)`;
  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");
    div.style.border = ".5px solid blue";
    board.appendChild(div).classList.add("square");
  }
}

blackBtn.addEventListener("click", (e) => {
  changeBlack();
});

function changeBlack() {
  let squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      square.style.background = "black";
    });
  });
  currentSetting.textContent = "Black";
}

grayBtn.addEventListener("click", (e) => {
  changeGray();
});

function changeGray() {
  let squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      let rNum = Math.floor(Math.random() * 255);
      square.style.background = `rgb(${rNum},${rNum},${rNum})`;
    });
  });
  currentSetting.textContent = "Gray";
}

colorBtn.addEventListener("click", (e) => {
  changeColor();
});

function changeColor() {
  let squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      square.style.background = `rgb(${r},${g},${b})`;
    });
  });
  currentSetting.textContent = "Color";
}

eraserBtn.addEventListener("click", (e) => {
  changeErase();
});

function changeErase() {
  let squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      square.style.background = "white";
    });
  });
  currentSetting.textContent = "Eraser";
}

clearBoard.addEventListener("click", (e) => {
  clearGrid();
});

function clearGrid() {
  let squares = board.querySelectorAll("div");
  squares.forEach((square) => {
    square.style.background = "white";
  });
}
