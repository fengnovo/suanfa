// 迭代：for 版本迭代    递归：不断的调用自己

// 递归方式


//迭代方式
// 找到target，返回target的所在数组角标，找不到返回-1
function erfen(arr, target) {
	let tempArr = [];
	console.log(arr);
	arr = arr.sort((a,b) => a- b);
	for(let i = 1; i< arr.length; i++) {
		let ii = Math.floor(i / 2); // 中间的
		if(arr[ii] === target) {
			return ii
		} else if(arr[ii] < target) {
			tempArr.slice(0, ii - 1);
		} else {
			tempArr.slice(ii, arr.length);
		}
	}
	return erfen(tempArr, target);
}
console.log(erfen([2,3,5,6,1,33,7],7));
