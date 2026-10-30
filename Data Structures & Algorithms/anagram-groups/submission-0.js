class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};

        for(let str of strs) {
            let key = str.split("").sort().join("");
            if(map[key]) {
                map[key].push(str)
            } else {
                map[key] = [str]
            }
        }

        let result = [];

        Object.values(map).forEach(v => result.push(v))

        return result;
    }
}
