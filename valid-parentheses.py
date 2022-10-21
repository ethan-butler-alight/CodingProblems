def isValid(s):

    stack = list(s)
    pairs = {"(": ")", "{": "}", "[": "]"}
    length = len(stack)

    pointer = 1

    while pointer < length:
        current = stack[pointer]

        if current == pairs[stack[0]]:
            stack.pop(pointer)
            stack.pop(0)
            length = len(stack)
        else:
            pointer += 1
            if pointer == length:
                return False

    return True


print(isValid("([)]"))


def isValid2(s):

    stack = list(s)
    pairs = {"(": ")", "{": "}", "[": "]"}
    length = len(stack)

    while length > 0:
        if length > 1:
            current = stack[0]
            nxt = stack[1]
        else:
            return False

        if current not in pairs:
            return False
        elif nxt == pairs[current]:
            stack.pop(0)
            stack.pop(0)
        else:
            position = 1

            while position < length:
                pointer = stack[position]
                if pointer == pairs[current]:
                    stack.pop(position)
                    stack.pop(0)
                    break
                else:
                    position += 1
                    if position == length:
                        return False

        length = len(stack)
        print("Stack", stack)

    return True
