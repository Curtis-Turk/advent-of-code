const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

const rockPaperScissors = (inputData) => {
  const me = inputData[0][2];

  return myChoice[me] + scoreObj[inputData[0]];
};

const scoreObj = {
  "A X": 3,
  "B Y": 3,
  "C Z": 3,
  "A Y": 6,
  "B Z": 6,
  "C X": 6,
  "A Z": 0,
  "B X": 0,
  "C Y": 0,
};

const myChoice = {
  X: 1,
  Y: 2,
  Z: 3,
};

module.exports = rockPaperScissors;
