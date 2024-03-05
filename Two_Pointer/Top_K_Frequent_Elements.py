class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hashmap = {}
        bucket = [[] for i in range(len(nums) + 1)]

        for n in nums:
            hashmap[n] = 1 + hashmap.get(n, 0)
        
        for key, value in hashmap.items():
            bucket[value].append(key)
        
        result = []
        for i in range(len(bucket) -1, 0, -1):
            for num in bucket[i]:
                result.append(num)
                if (len(result) == k):
                    return result
