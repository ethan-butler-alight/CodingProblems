"""
Link: https://www.codewars.com/kata/52f3149496de55aded000410
Instructions:

Concepts to Note:

My Solution:
"""
def sum_digits(number):
    
    if (number < 0):
        number *= -1
    sum = 0
    for i in (str(number)):
        sum += int(i)
        
    return sum

"""
Top Solution:

"""
