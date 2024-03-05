class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        que = collections.deque()

        left, result = 0, []

        for right in range(len(nums)):
            while que and nums[right] > nums[que[-1]]:
                que.pop()
            que.append(right)

            if left > que[0]:
                que.popleft()
            
            if right + 1 >= k:
                result.append(nums[que[0]])
                left += 1
        
        return result