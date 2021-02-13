/**
 * https://www.hackerrank.com/challenges/crush/problem
 * response from https://medium.com/@Kliative/array-manipulation-hacker-rank-javascript-5a702c1ff044
 */

'use strict';

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

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries = [[]]) {
  const arr = Array(n + 1);
  let max = 0;
  let current = 0;

  queries.forEach(([startValue, endValue, value]) => {
    arr[startValue] = arr[startValue] || { start: 0, end: 0 };
    arr[endValue] = arr[endValue] || { start: 0, end: 0 };

    arr[startValue].start += value;
    arr[endValue].end += value;
  });

  arr.forEach(cell => {
    if (cell) {
      current += cell.start;

      if (max < current) max = current;

      current -= cell.end;
    }
  })

  return max;
}

const sampleQueries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];

function main() {
  const n = 5;

  const m = 3;

  let result = arrayManipulation(n, sampleQueries);

  console.log(result)
}

(() => main())();