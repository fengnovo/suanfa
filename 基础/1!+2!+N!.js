// 给定一个参数N，返回1!+2!+3!+...+N! => 1*1 +  1*2 + 1*2*3  + 1*2*3*...*(n-1)*n

// 求1*2*3*...*(n-1)*n
function f(n) {
    let jiecheng = 1;
    for (let i = 1; i <= n; i++) {
        jiecheng = jiecheng * i;
    }
    return jiecheng;
}

// 用递归方式
function f1(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    return f1(n - 1) + f(n); // 前一个阶乘相加 加后一个阶乘
}

// 用迭代for循环方式
function f2(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + f(i);
    }
    return sum;
}


console.time('f2');
console.log(f2(10));    // 4037913
console.timeEnd('f2');  // f2: 0.095ms
console.time('f1');
console.log(f1(10));    // 4037913
console.timeEnd('f1');  // f1: 4.666ms