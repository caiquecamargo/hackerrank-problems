/**
 * https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists/problem
 */

// Complete the mergeLists function below.

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
function mergeLists(head1, head2) {
  const llist3 = new SinglyLinkedList();

  while (head1 || head2) {
    if (!head1) {
      llist3.insertNode(head2.data);
      head2 = head2.next;
    } else if (!head2) {
      llist3.insertNode(head1.data);
      head1 = head1.next;
    } else if (head1.data < head2.data) {
      llist3.insertNode(head1.data);
      head1 = head1.next;
    } else {
      llist3.insertNode(head2.data);
      head2 = head2.next;
    }
  }

  //To test:
  //return llist3; 
  return llist3.head;
}

const sample = [1, 3, 1, 2, 3, 2, 3, 4]

function main() {

  const tests = sample.shift();

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = sample.shift();
    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = sample.shift();
      llist1.insertNode(llist1Item);
    }

    const llist2Count = sample.shift();

    let llist2 = new SinglyLinkedList();

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = sample.shift();
      llist2.insertNode(llist2Item);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    llist3.printList();
  }
}

(() => main())();
