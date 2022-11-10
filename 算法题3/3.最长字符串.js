var lengthOfLongestSubstring = function (s) {
    let stack = [];
    let ss = [];
    stack.push(s.charAt(0));
    for (let i = 1; i < s.length; i++) {
        let item = s.charAt(i);
        for (let j = 0; j < stack.length; j++) {
            if (item === stack[j]) {
                stack[j] = null;
            }
        }
        let strArr = [];
        for (let j = 0; j < stack.length; j++) {
            if (stack[j]) {
                strArr.push(stack[j])
            }
        }
    }
    return stack.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));