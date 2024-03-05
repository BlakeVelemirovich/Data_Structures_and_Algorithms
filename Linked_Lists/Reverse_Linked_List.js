/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let [prev, crnt, nxt] = [null, head, null];

    while (crnt) {
        nxt = crnt.next;
        crnt.next = prev;
        prev = crnt;
        crnt = nxt;
    }
    return prev;
};