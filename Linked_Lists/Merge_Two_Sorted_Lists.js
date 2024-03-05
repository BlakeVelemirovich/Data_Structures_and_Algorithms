/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let merged = {val: -1, next: null},
        crnt = merged;
    
    while (list1 && list2) {
        if (list1.val > list2.val) {
            crnt.next = list2;
            list2 = list2.next;
        }
        else {
            crnt.next = list1;
            list1 = list1.next;
        }
        crnt =crnt.next;
    }

    crnt.next = list1 || list2;
    return merged.next;
};