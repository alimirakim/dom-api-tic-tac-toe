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
// 2-3 wins - check horiz/vert/opt-diag
    let classes = div.classList
    //find classes to get row and column
    //check if all in that row have x/o class
    //check if all in that column have x/o class
    let row = Math.floor(div.id.split("-")[1]/3) + 1;
    let column = (div.id.split("-")[1] % 3) + 1;
    console.log("row", row);
    console.log("column", column)
}

})