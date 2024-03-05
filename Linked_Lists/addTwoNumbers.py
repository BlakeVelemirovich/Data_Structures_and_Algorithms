# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        smartie = ListNode()
        tail = smartie
        overFlow = 0

        while (l1 or l2 or overFlow):
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0

            val = (val1 + val2 + overFlow) % 10
            overFlow = (val1 + val2 + overFlow) // 10

            tail.next = ListNode(val)

            tail = tail.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next

        return smartie.next