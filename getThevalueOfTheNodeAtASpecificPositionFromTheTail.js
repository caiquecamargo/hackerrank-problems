'use strict';
const SinglyLinkedList = require('./linkedList');

// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
  let node = head;
  let length = 0;

  while (node.next) {
    node = node.next;
    length += 1;
  }

  node = head;
  length = length - positionFromTail;
  while (length > 0) {
    node = node.next;
    length -= 1;
  }

  return node.data;
}

const sample = [2, 1, 1, 0, 3, 3, 2, 1, 0];

function main() {

  const tests = sample.shift();

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = sample.shift();

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = sample.shift();
      llist.insertNode(llistItem);
    }

    const position = sample.shift();

    let result = getNode(llist.head, position);

    console.log(result)
  }
}

(() => main())();