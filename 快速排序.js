// 快速排序(递归)
function quickSort1(arr) {
	// 取数组中间一个元素，这时数组分左右两边，看这个元素是在左边还是右边
	if (arr.length <= 1) return arr;
	let middle = arr[0]; // 把第一个认为是中间值
	let left = [];
	let right = [];
	for (let i = 1; i < arr.length; i++) {
		if (middle > arr[i]) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return quickSort(left).concat([middle], quickSort(right));
}

console.log(quickSort([234, 23, 2, 1, 22, 54, 78, 100]));
// 一种是动态规划
function quickSort(arr) {

}