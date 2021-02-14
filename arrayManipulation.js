/**
 * https://www.hackerrank.com/challenges/crush/problem
 * response from https://medium.com/@Kliative/array-manipulation-hacker-rank-javascript-5a702c1ff044
 * response from https://sites.northwestern.edu/acids/2018/11/12/solution-hackerrank-array-manipulation/
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
  const arr = '0'.repeat(n).split('').map(e => parseInt(e));
  let max = 0;
  let current = 0;

  queries.forEach(([a, b, k]) => {
    arr[a - 1] += k;
    if (b != n) arr[b] -= k;
  });

  arr.forEach(number => {
    current += number;

    if (max < current) max = current;
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