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

        const arr = Array.from({length: nums.length + 1}, () => []);

        for(let [key, val] of fMap) {
            arr[val].push(key)
        }

        let res = []
        for(let i = arr.length -1; i > 0;i--) {
            for(let n of arr[i]) {
                res.push(n);
                if(res.length === k) {
                    return res;
                }
            }
        }
    }
}
