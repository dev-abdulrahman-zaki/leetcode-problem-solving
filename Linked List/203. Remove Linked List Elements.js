class ListNode {
  constructor(val = 0, next = null) {
    this.val = val; // note: val not value
    this.next = next;
  }
}

var removeElements = function (head, val) {
  // if empty
  if (!head) {return head;} 
  let prev = null;
  let curr = head;
    while (curr){
        // if first element will be removed
        if(head.val === val){
            head = head.next;
            curr = head;
        }
        else{
            if (curr.val !== val){
                prev = curr;
            } else {
                prev.next = curr.next;
            }
            curr = curr.next;
        }    
    }
    return head;
};


var removeElements = function (head, val) {
    // Handle empty list
    if (!head) {return head;}    
    // Remove leading elements with value val
    while (head && head.val === val) {head = head.next;}
    let prev = null;
    let curr = head;
    while (curr) {
        if (curr.val === val) {
            // Remove curr node by updating prev.next
            prev.next = curr.next;
        } else {
            prev = curr; // Update prev only for non-matching nodes
        }
        curr = curr.next; // Move curr to the next node
    }
    return head;
};
