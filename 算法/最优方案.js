const arr = [1, 2, 4, 1, 7, 8, 3];
// 选数组中的一个或多个，到i下标这个目标过程，最优解方案
// rec表示递归的意思，opt是优化的意思
function rec_opt(arr, i) {
    if (i == 0) { // i是目标下标，到i的最优
        return arr[0];
    } else if (i == 1) {
        return Math.max(arr[0], arr[1]);
    } else {
        // A方案是选，选它时侯的收益
        const A = rec_opt(arr, i - 2) + arr[i]
        // B方案是不选，不选它时侯的收益
        const B = rec_opt(arr, i - 1);
        return Math.max(A, B);
    }
}

console.log(rec_opt(arr, 6));// 15   其实就是：1，4，7，3