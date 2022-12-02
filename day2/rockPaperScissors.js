const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

const rockPaperScissors = (inputData) => {
  console.log(inputData);
};

// rockPaperScissors(inputData);

let rpcScores = {
  A: 1,
  B: 2,
  C: 3,
};

console.log(rpcScores["A"]);

module.exports = rockPaperScissors;
