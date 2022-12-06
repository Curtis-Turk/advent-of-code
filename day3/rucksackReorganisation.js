const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

inputData.forEach((rucksack) => {});

let rucksack = inputData[0];
let firstSection = rucksack.slice(0, rucksack.length / 2).split("");
// .sort();
let secondSection = rucksack
  .slice(rucksack.length / 2, rucksack.length)
  .split("");
// .sort();

console.log(firstSection.filter((value) => secondSection.includes(value)));
// console.log({ firstSection }, { secondSection });
