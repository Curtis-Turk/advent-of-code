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

describe("multiple rounds", () => {
  test("score mutliple rounds", () => {
    expect(rockPaperScissors(["A X", "B Y", "C Z"])).toEqual(15);
  });
  test("score mutliple rounds", () => {
    expect(rockPaperScissors(["A Y", "B X", "C Z"])).toEqual(15);
  });
  test("score mutliple rounds", () => {
    expect(
      rockPaperScissors([
        "C X",
        "C Y",
        "C X",
        "B X",
        "B Z",
        "A Z",
        "C Y",
        "C Z",
        "B Z",
        "C X",
        "B Y",
        "C Y",
        "C Y",
        "A Y",
        "C Y",
        "C Y",
        "C Z",
        "C X",
        "B Z",
        "C Y",
        "A Y",
        "A Y",
        "C Z",
        "B Y",
        "A Y",
        "C Z",
        "C Y",
        "A Y",
        "A Y",
        "B Y",
        "C Y",
        "C Z",
      ])
    ).toEqual(170);
  });
});
