# Problem: https://leetcode.com/problems/merge-two-sorted-lists/
# Better solution:

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(
        self, list1: Optional[ListNode], list2: Optional[ListNode]
    ) -> Optional[ListNode]:

        head = None

        if list1 or list2:
            current = ListNode()
            head = current

            while list1 != None and list2 != None:
                if list1.val < list2.val:
                    current.val = list1.val
                    list1 = list1.next
                else:
                    current.val = list2.val
                    list2 = list2.next

                current.next = ListNode()
                current = current.next

            while list1 != None:
                current.val = list1.val
                list1 = list1.next
                if list1:
                    current.next = ListNode()
                    current = current.next

            while list2 != None:
                current.val = list2.val
                list2 = list2.next
                if list2:
                    current.next = ListNode()
                    current = current.next

        return head
