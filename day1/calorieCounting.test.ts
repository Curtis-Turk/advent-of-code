const calorieCounting = require("./calorieCounting");

test("returns a value", () => {
  expect(calorieCounting(["1"])).toEqual([1]);
});
