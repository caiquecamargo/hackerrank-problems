/**
 * https://www.hackerrank.com/challenges/array-left-rotation/problem
 */
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.split('\n');

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

function rotateLeft(d, arr = []) {
  // Write your code here
  const n = arr.length;

  for (let i = 0; i < d; i++) {
    const aux = arr.shift();
    arr.push(aux);
  }

  return arr;
}

const sample = [1, 2, 3, 4, 5]

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = 5;

  const d = 4;

  // const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

  const result = rotateLeft(d, sample);

  console.log(result)

  // ws.write(result.join(' ') + '\n');

  // ws.end();
}

(() => main())();