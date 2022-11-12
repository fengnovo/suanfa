let arr = [12, 34, 52, 2, 1, 342, 33, 22, 33, 55, 6, 21];
// 写代码不能急，一步步验证，打印中间过程。
// 先写会的，先局部再整体
// 先粗糙，再精细，边界往后再想。
function selectioSort(array) {
    for (let j = 0; j < array.length - 1; j++) {
        let minPos = j;
        // i会先到最后一个元素，所以j最后一个可以减一
        for (let i = j + 1; i < array.length; i++) {
            if (arr[i] < arr[minPos]) {
                let temp = arr[i];
                arr[i] = arr[minPos];
                arr[minPos] = temp;
            }
        }

        console.log(array);
    }
    selectioSort(arr);