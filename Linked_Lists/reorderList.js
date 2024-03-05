/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var findMid = function(node) {

    let [slow, fast] = [node, node];

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

var reversed = function(node) {

    let [prev, crnt, nxt] = [null, node, null];

    while (crnt) {
        next = crnt.next;
        crnt.next = prev;
        prev = crnt;
        crnt = next;
    }
    
    return prev;
}

var mergeLists = function(list1, list2) {

    let [ first, next, second ] = [list1, null, list2];

    while (second.next) { 
        next = first.next;
        first.next = second;
        first = next;

        next = second.next;
        second.next = first;
        second = next;
    }

}

var reorderList = function(head) {
    
    let midPoint = findMid(head);
    let reversedMid = reversed(midPoint);
    let reorderedList = mergeLists(head, reversedMid);
};