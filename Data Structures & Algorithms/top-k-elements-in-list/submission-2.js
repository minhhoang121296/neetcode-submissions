class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const fMap = new Map();

        for(let n of nums) {
            if(fMap.has(n)) {
                fMap.set(n, fMap.get(n) + 1)
            } else {
                fMap.set(n, 1)
            }
        }

        const arr = Array.from(fMap).sort((a,b) => b[1] - a[1])
        const result = []
        for(let i = 0; i < k; i++) {
            result.push(arr[i][0])
        }
        return result;
    }
}
