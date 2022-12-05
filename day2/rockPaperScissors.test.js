const rockPaperScissors = require("./rockPaperScissors");

describe("single round", () => {
  test("draw with rock", () => {
    expect(rockPaperScissors(["A X"])).toEqual(4);
  });
  test("draw with paper", () => {
    expect(rockPaperScissors(["B Y"])).toEqual(5);
  });
  test("draw with scissors", () => {
    expect(rockPaperScissors(["C Z"])).toEqual(6);
  });
  test("lose with rock", () => {
    expect(rockPaperScissors(["B X"])).toEqual(1);
  });
  test("win with rock", () => {
    expect(rockPaperScissors(["C X"])).toEqual(7);
  });
});