class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

/*
var deleteDuplicates = function(head) {
    const dummyStartingPoint = new ListNode(-1);
    let prev = dummyStartingPoint;
    while(head){
        if (head.val !== prev.val){
            prev.next = head;
            prev = prev.next;
        }        
        head = head.next;        
    }
    return dummyStartingPoint.next;
};
*/

var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
