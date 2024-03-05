class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for val in tokens:
            if val == "+":
                stack.append(stack.pop() + stack.pop())
            elif val == "-":
                x, y = stack.pop(), stack.pop()
                stack.append(y - x)
            elif val == "*":
                stack.append(stack.pop() * stack.pop())
            elif val == "/":
                x, y = stack.pop(), stack.pop()
                stack.append(int(float(y) / x))
            else:
                stack.append(int(val))
        return stack[0]