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

const solve = (board) => {
  const seen = new Set();
  for (let i=0; i<9; i++) {
    for (let j=0; j<9; j++) {
      const currentVal = board[i][j];
      if (currentVal !== ".") {
        const row = currentVal + " row " + i;
        const col = currentVal + " column " + j
        const box = currentVal + " box " + i/3 + "-" + j/3;
        seen.add(row);
        seen.add(col);
        seen.add(box);
        if (!(seen.has(row) || seen.has(col) || seen.has(box))) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(solve(board));


  // const solve = (row, col, board=board) => {
  //   if (col == board[row.length]) {
  //     // Finished a row
  //   }
  //   for (let value=1; value<=9; value++) {
  //     board[row][col] = value;
  //     if (validPlacement(row, col)) {
  //       if (solve(row, col+1, board)) {
  //         return true;
  //       }
  //     }
  //   }
  //   // Backtrack, invalid solution
  //   board[row][col] = EMPTY_ENTRY;
  // }
