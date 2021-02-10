/**
 * https://www.hackerrank.com/challenges/dynamic-array/problem
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

const sample = [
  '1 0 5',
  '1 1 7',
  '1 0 3',
  '2 1 0',
  '2 1 1'
]

function initialize(n) {
  const arr = Array(n);
  for (let i = 0; i < n; i++) arr[i] = [];

  return arr;
}

function query_one(arr = [[]], lastAnswer, x, y, n) {
  const idx = (x ^ lastAnswer) % n;
  arr[idx].push(y)

  return arr;
}

function query_two(arr = [[]], lastAnswer, x, y, n, result) {
  const idx = (x ^ lastAnswer) % n;
  const list = arr[idx];
  const listIdx = y % list.length;
  lastAnswer = list[listIdx];
  result.push(lastAnswer);

  return [lastAnswer, arr, result];
}

/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries = []) {
  // Write your code here
  let arr = initialize(n);
  let lastAnswer = 0;
  let result = []
  queries.forEach(query => {
    let [q, x, y] = query.split(' ');

    if (q === '1') arr = query_one(arr, lastAnswer, Number(x), Number(y), n);
    else[lastAnswer, arr] = query_two(arr, lastAnswer, Number(x), Number(y), n, result);
  })

  return result;

}

function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  // const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  // const n = parseInt(firstMultipleInput[0], 10);

  // const q = parseInt(firstMultipleInput[1], 10);

  // let queries = Array(q);

  // for (let i = 0; i < q; i++) {
  //   queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
  // }

  const result = dynamicArray(2, sample);
  console.log(result.join('\n') + '\n')

  // ws.write(result.join('\n') + '\n');

  // ws.end();

  return 0
}

(() => {
  main();
})();