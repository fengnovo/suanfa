// function insertSort( arr ){
// 	let len = arr.length;
// 	for(let i=1;i<len; i++){
// 		let temp = arr[i];
// 		let j = i-1;//默认已排序的元素
// 		//在已经排序好的队列进行从后到前的扫描
// 		while( j>=0 && arr[j] > temp ){
// 			//已排序的元素大于新元素，将该元素移动到下一个位置
// 			arr[j+1]=arr[j];
// 			j--;
// 		}
// 		arr[j+1] = temp;
// 	}
// 	return arr;
// }
// let arr = [5,3,4,2,1];

// console.log( insertSort(arr) );

// 分解
// 先取一个数，放到一个数组里，假定这个是排好的数组，从剩下的萝卜里面拿一个，将前面的数组增加一个位置大小，
// 将那个萝卜暂时放在前面排好的数组最后一个位置（就是新增的那个位置，这个很关键！！！）
// 就是在已经有顺序的数组里面对比（用for循环）
// 从左到右，如果它大于元素中的

function insert(arr, n) {
	// 假设arr是已经排好的数组，0到n-1是排序好的
	let key = arr[n]; // 这是第n个
	let i = n;
	// 如果前一个数字比当前数字大，就和前一个数字调换
	while (arr[i - 1] > key && i > 0) {
		arr[i] = arr[i - 1];
		i--;
	}
	arr[i] = key;
}

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		insert(arr, i)
	}
}

let arr = [5, 3, 4, 2, 1];
insertionSort(arr);
console.log(arr);



