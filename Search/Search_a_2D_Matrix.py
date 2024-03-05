class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        top, bot = 0, len(matrix) - 1

        while top <= bot:
            curRow = (top + bot) // 2
            if target < matrix[curRow][0]:
                bot = curRow - 1
            elif target > matrix[curRow][-1]:
                top = curRow + 1
            else:
                break

        left, right = 0, len(matrix[0]) - 1

        while left <= right:
            mid = (right + left) // 2
            if matrix[curRow][mid] < target:
                left = mid + 1
            elif matrix[curRow][mid] > target:
                right = mid - 1
            else: 
                return True

        return False