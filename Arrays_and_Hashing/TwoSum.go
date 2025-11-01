func twoSum(nums []int, target int) []int {
    hashMap := make(map[int]int)

    for i, val := range nums {
        newTarg := target - val

        if value, isFound := hashMap[newTarg]; isFound {
            return []int{value, i}
        }

        hashMap[val] = i
    }
    return []int{}
}
