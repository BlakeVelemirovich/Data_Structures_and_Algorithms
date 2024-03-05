class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int top = 0;
        int rowLastIndex = matrix.length - 1;
        int colLastIndex = matrix[0].length - 1;
        int bot = rowLastIndex;
        int curRow = 0;

        while (top <= bot) {
            curRow = (top + bot) / 2;
            if (target < matrix[curRow][0]) {
                bot = curRow - 1;
            } else if (target > matrix[curRow][colLastIndex]) {
                top = curRow + 1;
            } else {
                break;
            }
        }

        int left = 0, right = colLastIndex;

        while (left <= right) {
            int mid = (right + left) / 2;
            if (matrix[curRow][mid] < target) {
                left = mid + 1;
            } else if (matrix[curRow][mid] > target) {
                right = mid - 1;
            } else {
                return true;
            }
        }
        
        return false;
    }
}