/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let moveZeroes = (nums) => {
	let leftPointer = 0;
	let temp = 0;

	for (let rightPointer = 0; rightPointer < nums.length; rightPointer++) {
		if (nums[rightPointer] !== 0) {
			temp = nums[leftPointer];
			nums[leftPointer] = nums[rightPointer];
			nums[rightPointer] = temp;
			leftPointer++;
		}
	}
}