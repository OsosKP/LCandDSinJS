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

const isValid = (board) => {
  const getRow = (board, index) => {
    const result = {};
    for (let i = 0; i < 9; i++) {
      const val = board[index][i];
      if (val === ".") continue;
      if (val in result) return false;
      result[val] = true;
    }
    return true;
  }

  const checkCol = (board, colIndex) => {
    const result = {};
    for (let i = 0; i < 9; i++) {
      const val = board[i][colIndex];
      console.log(val);
      if (val === ".") continue;
      if (val in result) return false;
      result[val] = true;
    }
    console.log(result);
    return true;
  }

  const getSection = (board, rowIndex, colIndex) => {
    const result = {};
    for (let i = rowIndex; i < rowIndex + 3; i++) {
      for (let j = colIndex; j < colIndex + 3; j++) {
        val = board[i][j];
        if (val === ".") continue;
        if (val in result) return false;
        result[val] = true;
      }
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (!getRow(board, i) ||
      !checkCol(board, i)) {
      return false;
    }
    if (i % 3 === 0) {
      for (let j = 0; j < 9; j += 3) {
        if (!getSection(board, i, j)) return false;
      }
    }
  }
  return true;

  // for (let i = 0; i < 9; i++) {
  //   rows[i] = getRow(board, i);
  //   if (!rows[i]) return false;
  //   cols[i] = checkCol(board, i);
  //   if (!cols[i]) return false;
  //   if (i % 3 === 0) {
  //     for (let j = 0; j < 9; j += 3) {
  //       sections[i + j / 3] = getSection(board, i, j);
  //       if (!sections[i+j/3]) return false
  //     }
  //   }
  //   return true;
  // }
}

console.log(isValid(board2));
