/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = (nums) => {
	let leftPointer = 0;
	let rightPointer = nums.length - 1;
	let currentMax = 0;
	
	while (leftPointer < rightPointer) {
		currentMax = Math.max(currentMax, (nums[leftPointer] - 1) * (nums[rightPointer] - 1))
		
		if (nums[leftPointer] > nums[rightPointer]) rightPointer--;
		else if (nums[rightPointer] > nums[leftPointer]) leftPointer++;
		else {
			leftPointer++;
		}	
	}
	
	return currentMax;
}