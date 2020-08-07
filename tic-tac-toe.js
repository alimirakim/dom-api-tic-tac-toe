const board = document.getElementById("tic-tac-toe-board");
let player = "x";
let xo_img;
const winner = document.getElementById("game-status");


// *****************
// P1: PLAYER CLICKS
// *****************
board.addEventListener("click", event => {
  // function checks what turn it is, sets img.svg
  // check if valid space.
  // fill div with image, 100%
  if (checkSpace()) {
    xo_img = `<img src="player-${player}.svg">`;
    event.target.innerHTML = xo_img;
    event.target.classList.add(player);
    if (checkWinner()) {
      winner.innerHTML = "Winner: " + player;
    }
    switchPlayer();
  }
});

/** Check if the space is empty or not. **/
function checkSpace() {
  if (event.target.innerHTML === "") {
    return true;
  } else {
    return false;
  }
}
/** Reassigns global player variable to x or o. **/
function switchPlayer() {
  if (player === "x") {
    player = "o";
  } else {
    player = "x";
  }
}

// ***************
// P2: GAME STATUS
// ***************

function checkWinner() {
  squareClasses = event.target.getAttribute("class").split(" ");
  console.log(squareClasses[1], squareClasses[2]);
  const rowNum = squareClasses[1];
  const colNum = squareClasses[2];
  let rowSquares = document.querySelectorAll("."+rowNum);
  let colSquares = document.querySelectorAll("."+colNum);
  if (checkMatch(rowSquares) || checkMatch(colSquares)) {
    console.log(rowSquares, " ", colSquares);
    return true;
  }
}

// THE PROBLEM FUNCTION
function checkMatch(group) {
  let match = true;
  console.log("player during checkMatch, ", player, "group, ", group);
  group.forEach( square => {
    console.log("the square has the player class: ", square.getAttribute("class").includes(player), " square classes: ", square.getAttribute("class"));
    if (!square.getAttribute("class").includes(player)) {
      console.log(`the ${square} square doesn't include player ${player}. This group doesn't match.`);
      match = false;
    };
  });
  return match;
}
