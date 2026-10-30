class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        map.set(nums[0], 0);

        for(let i = 1; i < nums.length; i++) {
            let sub = target - nums[i];
            if(map.has(sub)) {
                return [map.get(sub), i];
            } else {
                map.set(nums[i], i)
            }
        }
    }
}
