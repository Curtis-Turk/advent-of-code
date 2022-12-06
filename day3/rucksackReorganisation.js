const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

const getSharedItems = (rucksack) => {
  let firstSection = rucksack.slice(0, rucksack.length / 2).split("");
  let secondSection = rucksack
    .slice(rucksack.length / 2, rucksack.length)
    .split("");
  return firstSection.filter((value) => secondSection.includes(value));
};

const sharedArray = inputData.map((rucksack) => {
  return getSharedItems(rucksack);
});

console.log(sharedArray);

// console.log(getSharedItems(rucksack));
module.exports = getSharedItems;
