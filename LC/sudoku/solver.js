const board =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

const board2 =
    [[".", ".", "4", ".", ".", ".", "6", "3", "."]
        , [".", ".", ".", ".", ".", ".", ".", ".", "."]
        , ["5", ".", ".", ".", ".", ".", ".", "9", "."]
        , [".", ".", ".", "5", "6", ".", ".", ".", "."]
        , ["4", ".", "3", ".", ".", ".", ".", ".", "1"]
        , [".", ".", ".", "7", ".", ".", ".", ".", "."]
        , [".", ".", ".", "5", ".", ".", ".", ".", "."]
        , [".", ".", ".", ".", ".", ".", ".", ".", "."]
        , [".", ".", ".", ".", ".", ".", ".", ".", "."]]

const board3 =
    [[3, 9, -1, -1, 5, -1, -1, -1, -1],
    [-1, -1, -1, 2, -1, -1, -1, -1, 5],
    [-1, -1, -1, 7, 1, 9, -1, 8, -1],
    [-1, 5, -1, -1, 6, 8, -1, -1, -1],
    [2, -1, 6, -1, -1, 3, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, 4],
    [5, -1, -1, -1, -1, -1, -1, -1, -1],
    [6, 7, -1, 1, -1, 5, -1, 4, -1],
    [1, -1, 9, -1, -1, -1, 2, -1, -1]];

const findNextEmpty = (puzzle) => {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (puzzle[row][col] === ".") return [row, col];
        }
    }
    return [null, null];
}

const isValid = (puzzle, guess, row, col) => {
    // Check against row, col and box
    // Row
    const rowVals = puzzle[row]
        .filter(el => el !== ".");
    // console.log(rowVals);
    if (rowVals.includes(guess)) return false;


    // Column
    const colVals = {};
    for (let i = 0; i < 9; i++) {
        const val = puzzle[i][col];
        if (val === ".") continue;
        if (val in colVals) return false;
        colVals[val] = true;
    }

    // Box
    // Find the starting row and column indices for the 3x3 matrix
    // Which set of 3 rows are we in? -> 0, 3 or 6
    const rowStart = Math.floor(row / 3) * 3;
    const colStart = Math.floor(col / 3) * 3;
    for (let r = rowStart; r < rowStart + 3; r++) {
        for (let c = colStart; c < colStart + 3; c++) {
            if (puzzle[r][c] === ".") continue;
            if (puzzle[r][c] === guess) return false;
        }
    }
    return true;
}

const solveSudoku = (puzzle) => {
    // Choice -> Where to put the next guess
    [row, col] = findNextEmpty(puzzle);

    // Goal
    // If we get row = null and col = null, the board is full -> is it valid?
    if (row === null) return true;

    // Guess between 1 and 9 for this spot
    for (let guess = 1; guess < 10; guess++) {
        // Constraint
        if (isValid(puzzle, guess, row, col)) {
            puzzle[row][col] = guess;
            // Call again with the new board
            if (solveSudoku(puzzle)) return true;
        }
        // Backtrack if guess was wrong OR does not solve the puzzle
        puzzle[row][col] = ".";
    }
    return false;
}

console.log(solveSudoku(board));
// console.log(solveSudoku(board2));