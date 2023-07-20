import { scale, interchange, replacement, checkValidMatrix, checkZeroRow } from './mathFunctions';

function rref(matrix) {
  if (checkValidMatrix(matrix) === false) {
    return;
  }
  
  // Identify first pivot column
  // Move that pivot row to the top
  // let pivCol = 0;
  // while (pivCol < matrix[0].length) {
  //   for (let i = 0; i < matrix.length; i++) {
  //     if (matrix[i][pivCol] !== 0) {
  //       interchange(matrix, 0, i);
  //       break;
  //     }
  //   }
  // }

  let pivot = 0;
  let rowLen = matrix.length;
  let colLen = matrix[0].length;

  for (let r = 0; r < rowLen; r++) {
    if (colLen <= pivot) {
      return;
    }
    
    let i = r;
    while (matrix[i][pivot] === 0) {
      i++;
      if (rowLen === i) {
        i = r;
        pivot++;
        if (pivot === colLen) {
          removeNegativeZeroes(matrix);
          return;
        }
      }
    }

    interchange(matrix, i, r);

    let val = matrix[r][pivot];
    matrix[r] = scale((1/val), matrix[r]);

    for (let i = 0; i < rowLen; i++) {
      if (i === r) continue;

      val = matrix[i][pivot];
      replacement(matrix, r, i, -val);
    }
    pivot++;

  }
  
  removeNegativeZeroes(matrix);
  
  return;

}

function removeNegativeZeroes(matrix) {
  for (let row of matrix) {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === -0) {
        row[i] = Math.abs(row[i]);
      }
    }
  }
}

export default rref;