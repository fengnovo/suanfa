// BubbleSort.js
/**
对于一个有i个数字的序列，完成排序需要比较i-1轮，比果轮数记为j，
第j轮需要比较i-j次，需要两层循环，外循环控制轮数，内循环控制比较的次数。
**/
function bubbleSort(arr) {
	// i是对比轮数
	for(let i = 0; i< arr.length - 1; i++) {
		// j是每轮对比次数
		for (let j = 0; j<arr.length - i - 1; j++) {
			if (arr[j] > arr[j+1]) {
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}

console.log(bubbleSort([2,4,11,25,1,24,1555,12,29,7,5,3]))