const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

// PART ONE

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

const scoreRound = (round) => scoreObj[round] + myChoice[round[2]];

const rockPaperScissors = (inputData) => {
  return inputData.map((round) => scoreRound(round)).reduce((a, b) => a + b);
};

//PART TWO

// A rock = 1 / B paper = 2 / C scissors = 3
// X lose / Y draw / Z win
const strategyObj = {
  "A Y": 1,
  "B Y": 2,
  "C Y": 3,
  "A X": 3,
  "B X": 1,
  "C X": 2,
  "A Z": 2,
  "B Z": 3,
  "C Z": 1,
};

const winObj = {
  X: 0,
  Y: 3,
  Z: 6,
};

const scoreStrategy = (round) => strategyObj[round] + winObj[round[2]];

const fullStrategy = (inputData) => {
  return inputData.map((round) => scoreStrategy(round)).reduce((a, b) => a + b);
};

// part 1
console.log(rockPaperScissors(inputData));
// part 2
console.log(fullStrategy(inputData));

module.exports = { rockPaperScissors, fullStrategy };
