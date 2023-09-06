# Problem Page: https://leetcode.com/problems/two-sum/
# Better/Alternative Solution: External Solution based off: https://leetcode.com/problems/two-sum/discuss/2361743/Python-Simple-Solution-oror-O(n)-Time-oror-O(n)-Space:

from typing import List


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for i in range(0, length):
            for j in range(i, length):
                if i != j:
                    if (nums[i] + nums[j]) == target:
                        return i, j


my_solution = Solution()
nums = [1, 2, 3]
target = 5

print(my_solution.twoSum(nums, target))
