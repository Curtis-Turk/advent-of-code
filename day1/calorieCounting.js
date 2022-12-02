const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8");

const calorieCounting = (inputData) => {
  const elfCalorieData = inputData.split("\n").map(Number);

  let elfArray = [0];
  let elfIndex = 0;
  let currentElfIndex = 0;

  for (let i = 0; i < elfCalorieData.length; i++) {
    if (!elfCalorieData[i]) {
      elfIndex++;
      elfArray[elfIndex] = 0;
      currentElfIndex = 0;
      continue;
    }

    elfArray[elfIndex] += elfCalorieData[i];
  }

  return elfArray;
};

sortedElves = calorieCounting(inputData).sort((a, b) => b - a);

console.log(sortedElves[0] + sortedElves[1] + sortedElves[2]);

module.exports = calorieCounting;
