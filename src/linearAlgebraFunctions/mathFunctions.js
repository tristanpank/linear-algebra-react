function scale(scalar, row) {
  let res = [];
  for (let num of row) {
    res.push(num * scalar);
  }
  return res;
}

function interchange(matrix, row1, row2) {

}

function replacement(matrix, row1, row2, row1Scalar) {

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

export {scale, interchange, replacement, checkZeroRow}