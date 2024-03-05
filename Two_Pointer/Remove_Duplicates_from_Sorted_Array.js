/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 1;
    
    for (rightPointer = 1; rightPointer < nums.length; rightPointer++) {
        if (nums[rightPointer] != nums[rightPointer -1]) {
            nums[index++] = nums[rightPointer];
        }
    }
    return index;
};