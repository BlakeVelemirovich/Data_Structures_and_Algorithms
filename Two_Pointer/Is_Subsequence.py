class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        i, count = 0, 0
        
        while (i < len(s) and count < len(t)):
            if (s[i] == t[count]):
                i += 1
            count += 1
        return i == len(s)