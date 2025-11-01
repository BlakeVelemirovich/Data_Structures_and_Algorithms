func groupAnagrams(strs []string) [][]string {
    wordMap := make(map[[26]int][]string)

    for _, word := range strs {
        var letterCount [26]int
        for _, char := range word {
            letterCount[char - 'a']++
        }
        wordMap[letterCount] = append(wordMap[letterCount], word)
    }

    var result [][]string
    for _, words := range wordMap {
        result = append(result, words)
    }
    return result
}

// We need to track each word
// -> Store sorted letters from word as a key in a hash, values are words
// Make one pass to store keys, another pass to store values
// -> O(N) * O(N)
// Iterate through hashMap and build return array
// Handle empty strings
// Handle single element
