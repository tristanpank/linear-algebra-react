function scale(scalar, row) {
  let res = [];
  for (let num of row) {
    res.push(num * scalar);
  }
  return res;
}

function interchange(matrix, row1, row2) {
  let temp = matrix[row2];
  matrix[row2] = matrix[row1];
  matrix[row1] = temp;
}

function replacement(matrix, row1, row2, row1Scalar) {
  let scaled = scale(row1Scalar, matrix[row1]);
  for (let i = 0; i < matrix[row2].length; i++) {
    matrix[row2][i] += scaled[i];
  }
}

function checkZeroRow(row) {
  if (row.length === 0) {
    return false;
  }

  for (let num of row) {
    if (num !== 0) {
      return false;
    }
  }
  return true;

}

function checkValidMatrix(matrix) {
  if (matrix.length === 0) {
    return false;
  }

  let len = matrix[0].length;
  for (let row of matrix) {
    if (row.length !== len) {
      return false;
    }
  }
  return true;
}

export {scale, interchange, replacement, checkZeroRow, checkValidMatrix}