import {scale, interchange, replacement, checkZeroRow, checkValidMatrix } from '../linearAlgebraFunctions/mathFunctions';

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

test("interchange swaps rows", () => {
  let test1 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]
  interchange(test1, 0, 2);
  expect(test1).toEqual([
    [3, 3, 3],
    [2, 2, 2],
    [1, 1, 1]
  ]);
  interchange(test1, 2, 1);
  expect(test1).toEqual([
    [3, 3, 3],
    [1, 1, 1],
    [2, 2, 2]
  ]);
});

test("replacement adds scalar of one row to another.", () => {
  let test = [
    [1, 1, 1],
    [2, 2, 2]
  ];

  replacement(test, 0, 1, 1);
  expect(test).toEqual([
    [1, 1, 1],
    [3, 3, 3]
  ]);
  
  replacement(test, 1, 0, 2);
  expect(test).toEqual([
    [7, 7, 7],
    [3, 3, 3]
  ]);
});

test("check valid matrix returns true", () => {
  let test1 = [
    [1, 1, 1],
    [2, 2, 2]
  ]

  let test2 = [
    [1],
    [2],
    [3],
  ]

  expect(checkValidMatrix(test1)).toBe(true);
  expect(checkValidMatrix(test2)).toBe(true);
})

test("check valid matrix returns false", () => {
  let test1 = [
    [1, 1, 1],
    [2, 2]
  ]

  let test2 = [
    [1, 2],
    [2],
    [3, 3, 3]
  ]

  expect(checkValidMatrix(test1)).toBe(false);
  expect(checkValidMatrix(test2)).toBe(false);
})