class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        answer = [0] * len(temperatures)

        for i, val in enumerate(temperatures):
            while stack and val > stack[-1][0]:
                answer[stack[-1][1]] = i - stack[-1][1]
                stack.pop()
            
            stack.append((val, i))
        return answer