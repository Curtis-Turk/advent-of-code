const calorieCounting = require("./calorieCounting");

describe("Single elf", () => {
  test("returns a value for one meal", () => {
    expect(calorieCounting("1")).toEqual([1]);
  });
  test("returns a value for 2 meals", () => {
    expect(calorieCounting("1\n1")).toEqual([2]);
  });
  test("returns a value for 3 meals", () => {
    expect(calorieCounting("1\n1\n1")).toEqual([3]);
  });
});

describe("2 elves", () => {
  test("returns a value for one meal each", () => {
    expect(calorieCounting("1\n\n1")).toEqual([1, 1]);
  });
  test("returns a value for many meals", () => {
    expect(calorieCounting("1\n1\n1\n\n1\n1")).toEqual([3, 2]);
  });
});
