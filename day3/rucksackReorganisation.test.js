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
  test("displays only one of each Item", () => {
    expect(getSharedItems("AAAA")).toEqual(["A"]);
  });
});

describe("calculatePriority", () => {
  test("should return values for item", () => {
    expect(calculatePriority("a")).toEqual(1);
  });
  test("should return values for each shared item", () => {
    expect(calculatePriority("A")).toEqual(27);
  });
});
