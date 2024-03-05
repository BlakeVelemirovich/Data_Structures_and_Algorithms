/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode fakeNode = new ListNode(0);
        fakeNode.next = head;
        ListNode first = fakeNode, second = head;

        while (n > 0) {
            second = second.next;
            n--;
        }

        while (second != null) {
            second = second.next;
            first = first.next;
        }

        first.next = first.next.next;
        return fakeNode.next;
    }
}