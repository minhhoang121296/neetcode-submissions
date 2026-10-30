class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let map1 = {};
        let map2 = {};

        for (let i = 0; i < s.length; i++) {
            map1[s[i]] ? (map1[s[i]] = map1[s[i]] + 1) : (map1[s[i]] = 1);
            map2[t[i]] ? (map2[t[i]] = map2[t[i]] + 1) : (map2[t[i]] = 1);
        }

        if (Object.keys(map1).length !== Object.keys(map1).length) return false;

        for (let k of Object.keys(map1)) {
            console.log(k)
            console.log(map1[k])
            console.log(map2[k])
            if (map1[k] !== map2[k]) return false;
        }

        return true;
    }
}
