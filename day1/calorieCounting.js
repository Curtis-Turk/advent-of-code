const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8");

const calorieCounting = (inputData) => {
  const toNum = inputData.split("\n").map(Number);

  let elfArray = [0];
  let elfIndex = 0;
  let currentElfIndex = 0;

  for (let i = 0; i < toNum.length; i++) {
    if (!toNum[i]) {
      elfIndex++;
      elfArray[elfIndex] = 0;
      currentElfIndex = 0;
      continue;
    }

    elfArray[elfIndex] += toNum[i];
  }

  return elfArray;
};

module.exports = calorieCounting;
