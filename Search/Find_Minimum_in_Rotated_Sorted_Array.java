class Solution {
    public int findMin(int[] nums) {
        int left = 0, right = nums.length - 1;
        int middle;

        while (left <= right) {
            if (nums[left] <= nums[right]) {
                return nums[left];
            }

            middle = (right + left) / 2;
            if (nums[middle] >= nums[right]) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }

        return 0;
    }
}