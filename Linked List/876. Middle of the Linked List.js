class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // note: val not value
    this.next = next;
  }
}

var middleNode = function(head) {
    let curr = head;
    let length = 0;
    while(curr){
        length++;
        curr = curr.next;
    }
    curr = head;
    let index = 0;
    let middleIndex = Math.floor(length/2);
    while (curr){
        if (index === middleIndex){
            head = curr;
        }
        index++;
        curr = curr.next;
    }
    return head;
};