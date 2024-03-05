class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        charDict = {']':'[', '}': '{', ')':'('}

        if len(s) < 2:
            return False

        for char in s:
            if char == '{' or char == '[' or char == '(':
                stack.append(char)
            else:
                if len(stack) < 1:
                    return False
                elif stack.pop() != charDict[char]:
                    return False
        
        if len(stack) > 0:
            return False
        else:
            return True