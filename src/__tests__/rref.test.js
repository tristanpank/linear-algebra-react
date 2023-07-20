import rref from "../linearAlgebraFunctions/rref";

test("rref reduces a matrix to reduced row echelon form", () => {
  let test1 = [
    [1, 2, -1, -4],
    [2, 3, -1, -11],
    [-2, 0, -3, 22]
  ];

  let test2 = [
    [1, 2, 3, 7],
    [-4, 7, -2, 7],
    [3, 3, 0, 7]
  ];

  rref(test1);
  rref(test2);

  
  expect(test1).toEqual([
    [1, 0, 0, -8],
    [0, 1, 0, 1],
    [0, 0, 1, -2]
  ]);
})

test("rref works on column vectors", () => {
  let test = [
    [1],
    [2],
    [3]
  ]

  let test2 = [
    [0],
    [1],
    [0]
  ]

  rref(test);
  rref(test2);

  expect(test).toEqual([
    [1],
    [0],
    [0]
  ]);

  expect(test2).toEqual([
    [1],
    [0],
    [0]
  ]);
});

test("rref works on already reduced matrices", () => {
  let test = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ];

  expect(test).toEqual([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
  ])
});

