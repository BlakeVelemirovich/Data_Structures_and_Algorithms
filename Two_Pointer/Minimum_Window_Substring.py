class Solution:
    def minWindow(self, s: str, t: str) -> str:
        tMap, curCountMap = {}, {}
        for char in t:
            tMap[char] = 1 + tMap.get(char, 0)
        
        left, have, need, res, resLen = 0, 0, len(tMap), [], float("infinity")

        for right, char in enumerate(s):
            curCountMap[char] = 1 + curCountMap.get(char, 0)

            if char in tMap and curCountMap[char] == tMap[char]:
                have += 1
            
            while have == need:
                if resLen > right - left + 1:
                    res = [left, right]
                    resLen = right - left + 1

                leftChar = s[left]
                curCountMap[leftChar] -= 1

                if leftChar in tMap and curCountMap[leftChar] < tMap[leftChar]:
                    have -= 1

                left += 1
                
        return s[res[0]:res[1] + 1] if resLen != float("infinity") else ""