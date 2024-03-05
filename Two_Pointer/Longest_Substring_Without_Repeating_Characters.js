var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    
    let res = 1;
    let start = 0, end = 0;
    for(let i=1; i<s.length; i++) {
        if(s[i] !== s[end]) {
            end++;
            let found = false;
            for(let j=start; j<end; j++) {
                if(s[j] === s[i]) {
                    start = j+1;
                    found = true;
                    break;
                }
            }
            if(!found) {
                res = Math.max(end-start+1, res);
            }
        } else {
            start = i; 
            end = i;
        }
    }
    return res;
};