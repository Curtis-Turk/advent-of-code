const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8");

const calorieCounting = (inputData) => {
  console.log(inputData.split("\n"));
  return [parseInt(inputData)];
};

calorieCounting(inputData);

module.exports = calorieCounting;
