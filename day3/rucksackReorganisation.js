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

const lower = "abcdefghijklmnopqrstuvwxyz";
const fullPriorityList = lower + lower.toLocaleUpperCase();

console.log(fullPriorityList);

const calculatePriority = (sharedArray) => {
  return sharedArray.map((sharedLetter) => {
    return fullPriorityList.indexOf(sharedLetter) + 1;
  });
};

module.exports = { getSharedItems, calculatePriority };
