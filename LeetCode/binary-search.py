# Problem:
# Better/Alternative Solution:
from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:

        start = 0
        end = len(nums) - 1
        mid = 0

        while start < end:
            mid = (start + end) // 2
            if target < nums[mid]:
                end = mid - 1
            else:
                start = mid + 1

        if target == nums[mid]:
            return mid

        return -1


input = [-1, 0, 3, 5, 9, 12]
print(Solution().search(input, 9))
