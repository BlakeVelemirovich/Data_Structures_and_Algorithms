class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        charDict = {}
        counter = 0
        left = 0

        for right in range(len(s)):
            charDict[s[right]] = 1 + charDict.get(s[right], 0)
            counter = max(counter, charDict[s[right]])

            if (right - left + 1) - counter > k:
                charDict[s[left]] -= 1
                left += 1
        return right - left + 1