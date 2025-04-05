func twoSum(nums []int, target int) []int {
    prevMap := make(map[int]int)

    for i, num := range(nums) {
        tar := target - num

        if j, found := prevMap[tar]; found {
            return []int{j, i}
        }

        prevMap[num] = i
    }
    return []int{}
    
}
