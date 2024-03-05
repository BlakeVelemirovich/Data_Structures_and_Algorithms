/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let windowStart = 0, 
        sum = 0.0,
        maximumAverage = -Infinity;
    
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        sum += nums[windowEnd];
        
        if ((windowEnd + 1) >= k){
            maximumAverage = Math.max(maximumAverage, sum/k);
            sum -= nums[windowStart];
            windowStart++;
            }
    }
    
    return maximumAverage;
};