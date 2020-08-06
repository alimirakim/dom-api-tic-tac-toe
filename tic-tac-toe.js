window.addEventListener("DOMContentLoaded", function(){
    const board = document.getElementById("tic-tac-toe-board");

// Check x/o turn, draw x/o if box is empty
    let xTurn = true
    board.addEventListener("click", function(event){
        if (xTurn && ![...event.target.classList].includes("x-move") && ![...event.target.classList].includes("o-move")) {
            event.target.classList.add("x-move")
            xTurn = false;
        } else if (!xTurn && ![...event.target.classList].includes("x-move") && ![...event.target.classList].includes("o-move")) {
            event.target.classList.add("o-move");
            xTurn = true;
        }
        checkWinner(event.target)
    })

function checkWinner(div) {
// Check the id of the last move, compare and check if there's a winner, return x/o/null
    // let classes = div.classList
    let row = Math.floor(div.id.split("-")[1]/3) + 1;
    let column = (div.id.split("-")[1] % 3) + 1;
    if (checkRows(row)) {
      console.log("winner");
    }
    if (checkColumns(column)) {
      console.log("column winner!");
    }
}

function checkColumns(num) {
  let searchClass;
  if (xTurn) {
    searchClass = "o-move";
  } else {
    searchClass = "x-move";
  }
  const colNodes = document.querySelectorAll(".col-" + num)
  for (let i = 0; i < colNodes.length; i++) {
    if (![...colNodes[i].classList].includes(searchClass)) {
      return false;
    };
  };
  return true;
}

function checkRows(num) {
  let searchClass;
  if (xTurn) {
    searchClass = "o-move";
  } else {
    searchClass = "x-move";
  }
  const rowNodes = document.querySelectorAll(".row-" + num)
  for (let i = 0; i < rowNodes.length; i++) {
    if (![...rowNodes[i].classList].includes(searchClass)) {
      return false;
    };
  };
  return true;
  }
})