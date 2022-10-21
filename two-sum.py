"""
Problem Page: https://leetcode.com/problems/two-sum/
Prompt:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

External Solution based off: https://leetcode.com/problems/two-sum/discuss/2361743/Python-Simple-Solution-oror-O(n)-Time-oror-O(n)-Space:

"""


class Solution:
    # My solution
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for i in range(0, length):
            for j in range(i, length):
                if i != j:
                    if (nums[i] + nums[j]) == target:
                        return i, j

    # Reference cited above
    def twoSumExternalSolution(nums, target):
        dictionary = {}

        # i is the index in the list, j is the number in the list
        for i, j in enumerate(nums):
            r = target - j
        # Average time complexity for this accessing an element in a dictionary is O(1).
        # https://wiki.python.org/moin/TimeComplexity

        # Found the target
        if r in d:

            # return the index for both elements that add up to the target
            return [d[r], i]
        # If r is not in the dictionary, add the current element to the dictionary
        # {Key (number in the array): Value (index in the array)}
        d[j] = i
