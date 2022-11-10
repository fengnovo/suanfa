function swap(arr, x, y) {
    let temp = arr[y];
    arr[y] = arr[x];
    arr[x] = temp;
}

const a1 = [2, 4, 11, 25, 1, 24, 1555, 12, 29, 7, 5, 3];
const a2 = [23, 68, 180, 11, 162, 55, 6, 73];

// 选择排序 第一个和后面的比较，第一个如果大于后面的，就对换位置，这样每轮，最小的都往前面冒
function selectioSort(arr) {
    let n = arr.length;
    // 0, n-1
    // 0, n-2
    // 0, n-3
    for (let i = 0; i < n; i++) {
        // 0, 1
        for (let j = i + 1; j < n; j++) {
            // 是拿i和j比较，i不变，j增加
            if (arr[i] > arr[j]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}


// 冒泡排序 两两对比，大的往后面排
function bubbleSort(arr) {
    // 0, n-1
    // 0, n-2
    // 0, n-3
    // ...
    // 0, 1
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        console.log(`${i}--->`, i, arr[i]);
        // 0, n-1-0
        // 0, n-1-1
        // 0, n-1-2
        // 0, n-1-3
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // let temp = arr[j + 1];
                // arr[j + 1] = arr[j];
                // arr[j] = temp;
                swap(arr, j, j + 1)
            }
        }
    }
    return arr;
}
// console.log(selectioSort(a1));

// 插入排序
function insertSort(arr) {
    const n = arr.length;
    // 0,0
    // 0,1
    // 0,2
    // 0,3
    // 0,n
    // 默认第一个元素是已经排好序的数组，从第二个开始往排好序的数据里面插入
    for (let i = 1; i < n; i++) {
        // suppose假设
        // let suppose = i;
        for (let suppose = i; suppose > 0; suppose--) {
            // 假设下标suppose的是最后一个
            if (arr[suppose] < arr[suppose - 1]) {
                let temp = arr[suppose];
                arr[suppose] = arr[suppose - 1];
                arr[suppose - 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(insertSort(a1));

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    // if (arr.length === 2) return arr[0] < arr[1] ? arr : [arr[1], arr[0]];
    const length = arr.length;
    let mid = arr[0];
    let left = [];
    let right = [];
    for (let i = 1; i < length; i++) {
        if (arr[i] > mid) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }
    }
    return quickSort(left).concat([mid], quickSort(right))
}

console.log(quickSort(a1));


