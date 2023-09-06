# Problem: https://leetcode.com/problems/valid-parentheses/
# Better/Alternative Solution:
from typing import List


class Solution:
    def isValid(self, s: str) -> bool:

        if (len(s)) % 2 != 0:
            return False

        stack = []

        pairs = {"{": "}", "(": ")", "[": "]"}

        for i in s:
            if i in pairs:
                stack.append(i)
            else:
                if len(stack) > 0:
                    top = stack.pop()
                else:
                    return False

                if pairs.get(top) != i:
                    return False

        if len(stack) > 0:
            return False
        else:
            return True


input = "){"
print(Solution().isValid(input))
