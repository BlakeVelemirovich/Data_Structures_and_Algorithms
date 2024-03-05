/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let hashMap = {};
    const strlen = nums.length;
    
    for (let i = 0; i < strlen; i++) {
        
        let hashTarget = target - nums[i];
        
        if (hashMap[hashTarget] === undefined) {
            hashMap[nums[i]] = i;
        }
        else {
            return [hashMap[hashTarget], i];
        }
        
    }

};