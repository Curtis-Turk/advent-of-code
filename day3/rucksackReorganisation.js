const { group } = require("console");
const fs = require("fs");

const inputData = fs.readFileSync("./input.txt", "utf-8").split("\n");

// Getting the shared items
const getSharedItems = (rucksack) => {
  let firstSection = rucksack.slice(0, rucksack.length / 2).split("");
  let secondSection = rucksack
    .slice(rucksack.length / 2, rucksack.length)
    .split("");
  return [
    ...new Set(firstSection.filter((char) => secondSection.includes(char))),
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
  .map((rucksack) => getSharedItems(rucksack))
  .map((letter) => calculatePriority(letter))
  .reduce((a, b) => a + b);

// Real Data
const total = inputData
  .map((rucksack) => getSharedItems(rucksack))
  .map((letter) => calculatePriority(letter))
  .reduce((a, b) => a + b);

// Part 2

const makeGroupsOfThree = (data) => {
  const groupsOfThree = [];
  for (let i = 0; i < data.length; i += 3) {
    let group = [data[i], data[i + 1], data[i + 2]];
    groupsOfThree.push(group);
  }
  return groupsOfThree;
};

const getGroupBadge = (group) => {
  let one = group[0].split("");
  let two = group[1].split("");
  let three = group[2].split("");

  return [
    ...new Set(
      one.filter((char) => two.includes(char) && three.includes(char))
    ),
  ];
};

// Test Data
let groupTotal = makeGroupsOfThree(inputData)
  .map((group) => getGroupBadge(group))
  .map((badge) => calculatePriority(badge))
  .reduce((a, b) => a + b);

// Part 1
console.log(total);
// Part 2
console.log(groupTotal);

module.exports = { getSharedItems, calculatePriority };
