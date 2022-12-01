const calorieCounting = require("./calorieCounting");

test("returns a value for one elf", () => {
  expect(calorieCounting("1")).toEqual([1]);
});
test("returns a value for one elf 2 meals", () => {
  expect(calorieCounting("1\n1")).toEqual([2]);
});
test("returns a value for one elf 3 meals", () => {
  expect(calorieCounting("1\n1\n1")).toEqual([3]);
});
