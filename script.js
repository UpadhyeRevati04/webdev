document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".cell");
    const statusText = document.getElementById("status");
    const resetBtn = document.getElementById("reset");

    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let running = true;

    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    function checkWinner() {
        let winner = null;

        winPatterns.forEach(pattern => {
            const [a, b, c] = pattern;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                winner = board[a];
                cells[a].classList.add("winner");
                cells[b].classList.add("winner");
                cells[c].classList.add("winner");
                running = false;
            }
        });

        if (winner) {
            statusText.textContent = `🎉 Player ${winner} Wins! 🎉`;
        } else if (!board.includes("")) {
            statusText.textContent = "It's a Draw! 😐";
            running = false;
        } else {
            statusText.textContent = `Player ${currentPlayer}'s Turn`;
        }
    }

    function handleClick(event) {
        const index = event.target.dataset.index;

        if (!board[index] && running) {
            board[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            event.target.classList.add("marked");

            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        } else if (running) {
            event.target.classList.add("shake");
            setTimeout(() => event.target.classList.remove("shake"), 300);
        }
    }

    function resetGame() {
        board = ["", "", "", "", "", "", "", "", ""];
        currentPlayer = "X";
        running = true;
        statusText.textContent = "Player X's Turn";
        cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("winner", "marked", "shake");
        });
    }

    cells.forEach(cell => cell.addEventListener("click", handleClick));
    resetBtn.addEventListener("click", resetGame);
});
