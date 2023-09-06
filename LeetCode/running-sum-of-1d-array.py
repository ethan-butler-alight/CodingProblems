# Problem page: https://leetcode.com/problems/running-sum-of-1d-array/


def runningSum(nums):

    current_total = 0
    for index, value in enumerate(nums):
        current_total += value
        nums[index] = current_total

    return nums


input = [1, 2, 3, 4, 5]
print(f"Nums:", input)

result = runningSum(input)
print(f"Running sum of nums:", result)
