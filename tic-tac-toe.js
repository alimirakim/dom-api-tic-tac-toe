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
    })

function checkWinner(id) {
// Check the id of the last move, compare and check if there's a winner, return x/o/null
// 2-3 wins - check horiz/vert/opt-diag

}

})