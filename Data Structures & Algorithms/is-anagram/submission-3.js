class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sLength = s.length;
        let tLength = t.length;
        if (sLength !== tLength) return false;
        let sMap = new Map();
        let tMap = new Map();

        for(let i = 0; i < sLength; i++) {
            if(sMap.has(s[i])) {
                sMap.set(s[i], sMap.get(s[i]) + 1)
            } else {
                sMap.set(s[i], 1)
            }


            if(tMap.has(t[i])) {
                tMap.set(t[i], tMap.get(t[i]) + 1)
            } else {
                tMap.set(t[i], 1)
            }
        }

        let result = true;
        // check all keys
        sMap.keys().forEach(sKey => {
            if(sMap.get(sKey) !== tMap.get(sKey)) {
                result = false;
                
            } 
        })

        return result;
    }
}
