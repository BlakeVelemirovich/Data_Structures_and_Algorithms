/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let rightPointer = height.length - 1;
    let leftPointer = 0;
    let result = 0;

    while (leftPointer < rightPointer) {
        result = Math.max(result, (rightPointer - leftPointer) * Math.min(height[rightPointer], height[leftPointer]));

        height[leftPointer] <= height[rightPointer] ? leftPointer++ : rightPointer--;
        
    }
    return result;
};