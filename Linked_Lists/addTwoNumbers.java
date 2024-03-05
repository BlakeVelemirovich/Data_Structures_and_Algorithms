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
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        
        ListNode smartie = new ListNode();
        ListNode tail = smartie;
        int overFlow = 0, val1 = 0, val2 = 0, val = 0;

        while (l1 != null || l2 != null || overFlow != 0) {
            if (l1 != null) {
                val1 = l1.val;
            } else val1 = 0;
            if (l2 != null) {
                val2 = l2.val;
            } else val2 = 0;

            val = (val1 + val2 + overFlow) % 10;
            overFlow = (val1 + val2 + overFlow) / 10;

            tail.next = new ListNode(val);

            tail = tail.next;
            if (l1 != null) {
                l1 = l1.next;
            } else l1 = null;

            if (l2 != null) {
                l2 = l2.next;
            } else l2 = null;
        }
        return smartie.next;
    }
}