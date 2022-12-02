const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

const rockPaperScissors = (inputData) => {
  // console.log({ inputData });
  const me = inputData[0][0];
  // const opp = inputData[2];

  console.log(me);
  return rpcScores[me] + 3;
};

// rockPaperScissors(inputData);

let rpcScores = {
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
};

// console.log(rpcScores["A"]);

module.exports = rockPaperScissors;
