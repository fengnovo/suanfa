// 判断给定的数组nums是否含重复元素 217
function a(nums) {
	// let map = new Map();
	// for(const num of nums) {
	// 	if (map.has(num)) {
	// 		return true;
	// 	}
	// 	map.set(num, num);
	// }
	// return false;
	let set = new Set();
	for (const x of nums) {
		if (set.has(x)) {
			return true;
		}
		set.add(x);
	}
	return false;
}

// console.log(a([2, 4, 6, 72, 21, 53, 22, 425, 20, 23]));

// 1.两数之和
// 求给定的数组arr，是否含两个数，两数之和等于target
// function num(arr, target) {
// 	// 遍历数组，假设
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = i + 1; j < arr.length; j++) {
// 			if (arr[i] + arr[j] === target) {
// 				return [i, j];
// 			}
// 		}
// 	}
// }
// console.log(num([3, 3], 6));


// js数组转tree
function num(arr, target) {
	let map = new Map();
	// 遍历数组，假设
	for (let i = 0; i < arr.length; i++) {
		if (map.has(target - arr[i])) {
			return [map.get(target - arr[i]), i];
		}
		map.set(arr[i], i);
	}
	// map遍历完是 Map(4) { 2 => 0, 7 => 1, 11 => 2, 15 => 3 }
}
console.log(num([2, 7, 11, 15], 9));
