const {
  getSharedItems,
  calculatePriority,
} = require("./rucksackReorganisation");

describe("getSharedItems", () => {
  test("Displays a shared item", () => {
    expect(getSharedItems("AA")).toEqual(["A"]);
  });
  test("Doesn't display a shared item", () => {
    expect(getSharedItems("Aa")).toEqual([]);
  });
  test("displays 3", () => {
    expect(getSharedItems("AabcAcay")).toEqual(["A", "a", "c"]);
  });
});

describe("calculatePriority", () => {
  test("should return values for item", () => {
    expect(calculatePriority(["a"])).toEqual([1]);
  });
  test("should return values for each shared item", () => {
    expect(calculatePriority(["a", "A"])).toEqual([1, 27]);
  });
  test("should return values for each shared item given example", () => {
    expect(calculatePriority(["p", "L", "P", "v", "t", "s"])).toEqual([
      16, 38, 42, 22, 20, 19,
    ]);
  });
});
