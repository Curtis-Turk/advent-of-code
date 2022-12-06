const getSharedItems = require("./rucksackReorganisation");

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
