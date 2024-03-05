/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Set(nums); 
    
    return hashMap.size !== nums.length;
};