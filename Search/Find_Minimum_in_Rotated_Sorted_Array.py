class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right, minimum = 0, len(nums) - 1, float("inf")

        while left <= right:
            mid = (right + left) // 2
            minimum = min(minimum, nums[mid])

            if nums[mid] > nums[right]:
                left = mid + 1
            else:
                right = mid - 1
        
        return minimum