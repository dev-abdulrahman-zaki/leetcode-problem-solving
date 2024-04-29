class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var mergeTwoLists = function (list1Head, list2Head) {
  const dummyStartingPoint = new ListNode(-1);
  let prev = dummyStartingPoint; // holds a reference to the object's location in memory, not a copy of the object itself.
  while (list1Head && list2Head) {
    if (list1Head.val <= list2Head.val) {
      prev.next = list1Head;
      prev = list1Head;
      list1Head = list1Head.next;
    } else {
      prev.next = list2Head;
      prev = list2Head;
      list2Head = list2Head.next;
    }
  }
  if(!list1Head){prev.next = list2Head;}
  if(!list2Head){prev.next = list1Head;}
  // console.log(dummyStartingPoint)
  // console.log(prev)
  return dummyStartingPoint.next;
};


var mergeTwoLists = function (list1Head, list2Head) {
  const dummyStartingPoint = new ListNode(-1);
  let prev = dummyStartingPoint; // holds a reference to the object's location in memory, not a copy of the object itself.
  while (list1Head && list2Head) {
    if (list1Head.val <= list2Head.val) {
      prev.next = list1Head; // add node to merged list (append)
      list1Head = list1Head.next; // remove node from front of list1
    } else {
      prev.next = list2Head;
      list2Head = list2Head.next;
    }
    prev = prev.next; // Move prev to the next node (the new node added to merged list)
  }
  if(!list1Head){prev.next = list2Head;} // add node to merged list
  if(!list2Head){prev.next = list1Head;}
  return dummyStartingPoint.next;
};


/*
var mergeTwoLists = function (list1, list2) {
    return list1.concat(list2).sort((a,b)=>a-b);
};

let list1 = [],
    list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
*/
