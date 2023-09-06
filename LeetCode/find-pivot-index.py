# Problem page: https://leetcode.com/problems/find-pivot-index/
# Better solution: https://leetcode.com/problems/find-pivot-index/discuss/109255/Short-Python-O(n)-time-O(1)-space-with-Explanation

from typing import List


class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        length = len(nums)
        sumLeft = [0]

        last_index = length - 1
        sumRight = [x * 0 for x in range(length)]

        for left_index in range(0, length):
            if left_index > 0:
                sumLeft.append(nums[left_index - 1] + sumLeft[left_index - 1])

            right_index = last_index - left_index

            if right_index == length - 1:
                sumRight[right_index] = 0
            else:
                sumRight[right_index] = (
                    nums[right_index + 1] + sumRight[right_index + 1]
                )

        for index in range(length):
            if sumLeft[index] == sumRight[index]:
                return index

        return -1
