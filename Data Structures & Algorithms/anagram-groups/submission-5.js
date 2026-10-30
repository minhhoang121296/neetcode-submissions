class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = {};
        
        for(let str of strs) {
            const arr = new Array(26).fill(0);
            
            for (let c of str) {
                arr[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            let key = arr.join(",");

            if(map[key]) {
                map[key].push(str)
            } else {
                map[key] = [str]
            }
        }

        return Object.values(map);
    }
}
