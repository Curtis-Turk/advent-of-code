const campCleanup = require("./campCleanup");

test("builds array of pairs and sections", () => {
  let input = ["1-2,1-2"];
  expect(campCleanup(input)).toEqual([
    [
      ["1", "2"],
      ["1", "2"],
    ],
  ]);
});
