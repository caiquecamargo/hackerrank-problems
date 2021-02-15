// Complete the removeDuplicates function below.

const SinglyLinkedList = require('./linkedList');

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
  let value = head.data;
  const llist = new SinglyLinkedList();
  llist.insertNode(value);

  while (head.next) {
    head = head.next;
    if (head.data !== value) {
      llist.insertNode(head.data);
      value = head.data;
    }
  }

  return llist.head;
}

const sample = [1, 5, 1, 2, 2, 3, 4];

function main() {

  const t = sample.shift();

  for (let tItr = 0; tItr < t; tItr++) {
    const llistCount = sample.shift();

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = sample.shift();
      llist.insertNode(llistItem);
    }

    let llist1 = removeDuplicates(llist.head);

    llist1.printList();
  }
}

(() => main())();