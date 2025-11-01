func topKFrequent(nums []int, k int) []int {
    bucket := make([][]int, len(nums)+1)
    countMap := make(map[int]int)

    for _, val := range nums {
        countMap[val]++
    }

    for key, val := range countMap {
        bucket[val] = append(bucket[val], key)
    }

    result := []int{}
    for i := len(bucket) -1; i > 0; i-- {
        for _, val := range bucket[i] {
            result = append(result, val)
            if len(result) == k {
                return result
            }
        }
    }
    return result
}

// Keep track of each number and their count
// Keep the count as an array with the indices being the number of occurences.
// Iterate through this array starting from the back until we hit k values 
