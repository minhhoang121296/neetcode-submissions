class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        for(let num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const heap = new MinPriorityQueue((x) => x[1]);

        for(const key in count) {
            heap.enqueue([key,count[key]]);
            if(heap.size() > k) heap.dequeue();
        }

        const res = [];
        for(let i =0; i <k;i++) {
            const [num, cnt] = heap.dequeue();
            res.push(num)
        }
        return res
    }
}
