class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        res = 0
        left = prices[0]

        for price in prices:
            if left > price:
                left = price
            res = max(res, price - left)
        return res