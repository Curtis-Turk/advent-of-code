import * as fs from "fs";

const inputData = fs.readFileSync("input.txt", "utf-8");

const calorieCounting = (inputData: string) => {
  console.log(inputData.split("\n"));
  return inputData;
};

module.exports = calorieCounting;
