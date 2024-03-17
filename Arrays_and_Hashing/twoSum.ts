function twoSum(nums: number[], target: number): number[] {
    
    let hashMap = new Map<number, number>();

    for (let i: number = 0; i < nums.length; i++) {
        const curTarg: number = target - nums[i];

        if (hashMap.has(curTarg)) {
            return [hashMap.get(curTarg), i];
        } else {
            hashMap.set(nums[i], i);
        }
    }
    return [];
};