class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // note: val not value
    this.next = next;
  }
}

var reverseList = function (head) {
  let prevNode = null;
  let currNode = head;
  let nextNode;
  while (currNode) {
    nextNode = currNode.next;
    currNode.next = prevNode;
    prevNode = currNode;
    currNode = nextNode;
  }
  head = prevNode;
  return head;
};
