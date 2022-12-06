const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

// Getting the shared items
const getSharedItems = (rucksack) => {
  let firstSection = rucksack.slice(0, rucksack.length / 2).split("");
  let secondSection = rucksack
    .slice(rucksack.length / 2, rucksack.length)
    .split("");
  return [
    ...new Set(firstSection.filter((value) => secondSection.includes(value))),
  ];
};

// Getting the item priority
const lower = "abcdefghijklmnopqrstuvwxyz";
const fullPriorityList = lower + lower.toLocaleUpperCase();

const calculatePriority = (letter) => {
  return fullPriorityList.indexOf(letter) + 1;
};

// Test Data
const testInputData = fs.readFileSync("./testInput.txt", "utf-8").split("\n");

const totalTest = testInputData
  .map((rucksack) => {
    return getSharedItems(rucksack);
  })
  .map((letter) => calculatePriority(letter))
  .reduce((a, b) => a + b);

console.log(totalTest);

// Real Data

const total = inputData
  .map((rucksack) => getSharedItems(rucksack))
  .map((letter) => calculatePriority(letter))
  .reduce((a, b) => a + b);

// Part 1
console.log(total);

// console.log(calculatePriority(sharedArray));

module.exports = { getSharedItems, calculatePriority };
