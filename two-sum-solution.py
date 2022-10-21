# Solution from:  https://leetcode.com/problems/two-sum/discuss/2361743/Python-Simple-Solution-oror-O(n)-Time-oror-O(n)-Space


def twoSum(nums, target):

    d = {}
    for i, j in enumerate(nums):
        r = target - j
        if r in d:
            return [d[r], i]
        d[j] = i


print(twoSum([4, 5, 6], 10))
