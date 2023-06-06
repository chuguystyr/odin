const playerFactory = () => {
    const score = [[], [], []];
    const checkWin = () => {
        if (score.some(row => row.reduce((acc, val) => acc + val, 0) === 3)) {
            return true;
        }
        for (let i = 0; i < 3; i++) {
            const columnSum = score.reduce((acc, row) => acc + row[i], 0);
            if (columnSum === 3) {
                return true;
            }
        }
        const diagonalSum1 = score.reduce((acc, row, index) => acc + row[index], 0);
        const diagonalSum2 = score.reduce((acc, row, index) => acc + row[2 - index], 0);
        if (diagonalSum1 === 3 || diagonalSum2 === 3) {
            return true;
        }
        return false;
    };
    return { score, checkWin };
};

const play = (() => {
    const board = document.getElementById('gameboard');
    const winner = document.getElementById('winner');
    const player1 = playerFactory();
    const player2 = playerFactory();
    let currentPlayer = player1;
    const resetButton = document.getElementById('reset');
    const resetGame = () => {
        currentPlayer = player1;
        player1.score = [[], [], []];
        player2.score = [[], [], []];
        winner.innerText = '';
        [...document.getElementsByClassName('cell')].forEach(cell => {
            cell.innerText = '';
        });
    };
    resetButton.addEventListener('click', resetGame);
    board.addEventListener('click', (event) => {
        if (event.target.className !== 'cell') return;
        if (event.target.innerText === '') {
            if (currentPlayer === player1) {
                event.target.innerText = 'X';
                const indexes = event.target.getAttribute('index').split(' ');
                player1.score[indexes[0]][indexes[1]] = 1;
                currentPlayer = player2;
            } else {
                event.target.innerText = 'O';
                const indexes = event.target.getAttribute('index').split(' ');
                player2.score[indexes[0]][indexes[1]] = 1;
                currentPlayer = player1;
            }
        };
        if (player1.checkWin()) {
            winner.innerText = 'Player X won!';
        } else if (player2.checkWin()) {
            winner.innerText = 'Player O won!';
        } else if ([...document.getElementsByClassName('cell')].every(el => el.innerText !== '')) winner.innerText = 'Draw!';
    })
})();