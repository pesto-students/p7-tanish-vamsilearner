// jest package used
// import mathOperations as './computation';
const mathOperations = require("./computation"); // require used to import the exported file

describe("Computation tests", () => {
  test("adding 1 + 2 should return 3", () => {  // sum test
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
  test("diff 1 - 2 should return 1", () => { // subtraction test
    expect(mathOperations.diff(1, 2)).toBe(-1);
  });
  test("product 1 * 2 should return 3", () => { // multiply test
    expect(mathOperations.product(1, 2)).toBe(2);
  });
});