const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8");

const calorieCounting = (inputData) => {
  return [
    inputData
      .split("\n")
      .map(Number)
      .reduce((a, b) => a + b),
  ];
};

module.exports = calorieCounting;
