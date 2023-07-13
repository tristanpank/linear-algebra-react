import {scale, interchange, replacement, checkZeroRow } from '../linearAlgebraFunctions/mathFunctions';

test("checkZeroRow returns True", () => {
  let testRow = [0, 0, 0, 0];
  let res = checkZeroRow(testRow);
  expect(res).toBe(true);
});

test("checkZeroRow returns False", () => {
  let testRow = [0, 0, 0, 1];
  let res = checkZeroRow(testRow);
  expect(res).toBe(false);
  expect(checkZeroRow([1, 2, 0, 4])).toBe(false);
  expect(checkZeroRow([])).toBe(false);
});

test("scale properly scales row", () => {
  expect(scale(2, [1, 1, 1, 1])).toEqual([2, 2, 2, 2]);
  expect(scale(1, [1, 4, 2, 3])).toEqual([1, 4, 2, 3]);
  expect(scale(0, [2, 44, 2])).toEqual([0, 0, 0]);
});

test("scale does not alter original row", () => {
  let row = [1, 2, 3, 4];
  let res = scale(2, row);
  expect(res).toEqual([2, 4, 6, 8]);
  expect(row).toEqual([1, 2, 3, 4]);
});

