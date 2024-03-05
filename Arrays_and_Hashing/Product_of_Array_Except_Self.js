/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let rightMultiplication = 1;
    let leftMultiplication = 1;
    let result = [];

    for (i = nums.length - 1; i >= 0; i--) {
        result[i] = rightMultiplication;
        rightMultiplication *= nums[i];
    }

    for (i = 0; i < nums.length; i++) {
        result[i] = leftMultiplication * result[i];
        leftMultiplication *= nums[i];
    }

    return result;
};