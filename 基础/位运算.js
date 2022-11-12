function print(num) {
    let str = '';
    for (let i = 31; i >= 0; i--) {
        let s = (num & (1 << i)) == 0 ? "O" : "1";
        str = str + s; // 从最左到最右
    }
    console.log(str);
}
// print(1);

// print(1 << 1); // 任何一个数左移一位是，这个数乘以2
// console.log(1 << 1)
// print(1 << 2);
// console.log(1 << 2)
// print(1 << 3);
// console.log(1 << 3)
// print(1 << 4);
// console.log(1 << 4)

// print(1234);
// console.log(1234 << 1)
// console.log(Number.MAX_SAFE_INTEGER / 10000 / 10000);

// 负数，是第一位为1，后面的取反加一

const x1 = 123324;
const x2 = ~x1;
const x3 = x1 ^ 1;
const x4 = x1 ^ 2;
// console.log(x2); // | & ~ ^
// print(x1);
// print(x3);
// print(x4);
// console.log(x3);
// console.log(x4);

// console.log(Math.random());

function b() {
    return Math.floor(Math.random() * 8);
}
function c() {
    let time = {};
    for (let i = 0; i < 100000; i++) {
        const xx = b();
        time[xx] = time[xx] === undefined ? 1 : time[xx] + 1;
    }
    console.log(
        Object.keys(time).map(i => `${i}:${time[i]}`)
    );
}
// c();

function d() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i > 4); // 虽然这里i是不会大于4 的，但是还是会先执行一遍do
}
// d();

// 生成相邻不相等的多个数组成的数组，数组长度是随机的，最大的长度是maxLength，
// 数组的数字是随机的里面最大值时maxValue
function randomArray(maxLength, maxValue) {
    let length = Math.floor(Math.random() * maxLength);
    let arr = new Array(length);
    if (length > 0) {
        arr[0] = Math.floor(Math.random() + maxValue);
        console.log('length--', length);
        for (let i = 0; i < length; i++) {
            do { // 程序会先执行一遍do
                arr[i] = Math.floor(Math.random() * maxValue);
            } while (arr[i] === arr[i - 1]);
            console.log(`${i} ----  `, arr[i]);
        }
    }
    return arr;
}

console.log(randomArray(20, 199));
