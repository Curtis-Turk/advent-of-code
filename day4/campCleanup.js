const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

console.log(inputData);
const campCleanup = (inputData) => {
  console.log(inputData);
  return inputData.map((pair) =>
    pair.split(",").map((section) => section.split("-"))
  );
};

module.exports = campCleanup;
