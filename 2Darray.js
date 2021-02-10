/**
 * https://www.hackerrank.com/challenges/2d-array/problem
 */

'use strict';

const { debug } = require('console');
const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

const sample = [[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]]

function printArray(arr) {
  for (let i = 0; i < 4; i++) {
    console.log(arr[i])
  }
  console.log("-------------------");
}

function sum(number, a, b, result) {
  if (a >= 0 && a < 4 && b >= 0 && b < 4) result[a][b] += number;

  return result;
}

const sortFunction = (a, b) => a - b;

function bigger(arr = [[]]) {
  return arr.map(line => line.sort(sortFunction).pop()).sort(sortFunction).pop();
}

// Complete the hourglassSum function below.
//ab - ab ab-1 ab-2 a-1b-1 a-2b a-2b-1 a-2b-2
function hourglassSum(arr) {
  let result = Array(4);

  for (let i = 0; i < 4; i++) result[i] = [0, 0, 0, 0];

  for (let a = 0; a < 6; a++) {
    for (let b = 0; b < 6; b++) {
      const number = arr[a][b];
      result = sum(number, a, b, result);
      result = sum(number, a, b - 1, result);
      result = sum(number, a, b - 2, result);
      result = sum(number, a - 1, b - 1, result);
      result = sum(number, a - 2, b, result);
      result = sum(number, a - 2, b - 1, result);
      result = sum(number, a - 2, b - 2, result);
    }
  }

  const biggerNumber = bigger(result);

  return biggerNumber;
}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // let arr = Array(6);

  // for (let i = 0; i < 6; i++) {
  //   arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  // }

  let result = hourglassSum(sample);

  console.log(result)

  // ws.write(result + "\n");

  // ws.end();
}

(() => {
  main();
})();