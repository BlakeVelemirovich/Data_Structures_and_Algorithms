class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        result = 0
        left = 0
        charSet = set()

        for char in s:
            while char in charSet:
                charSet.remove(s[left])
                left += 1

            charSet.add(char)
            result = max(result, len(charSet))

        return result