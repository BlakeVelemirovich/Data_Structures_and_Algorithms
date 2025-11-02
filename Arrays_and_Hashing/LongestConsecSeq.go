func longestConsecutive(nums []int) int {
    numSet := make(map[int]struct{})
    for _, val := range nums {
        numSet[val] = struct{}{}
    }

    longest := 0
    for val := range numSet {
        if _, foundNum := numSet[val - 1]; !foundNum {
            length := 1
            for {
                if _, exists := numSet[val + length]; exists {
                    length++
                } else {
                    break
                }
            }
            if longest < length {
                longest = length
            }
        } 
    }
    return longest
}
