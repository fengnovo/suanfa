// 猜数字大小(分治方式)
var quessNumber = function (n) {
	let low = 1;
	let high = n;
	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const res = quess(mid);
		if (res === 0) {
			return mid;
		} else if (res === 1) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
}

// 猜数字大小（递归方式）
var quessNumber2 = function (n) {
	const rec = (low, high) => {
		const mid = Math.floor((low + high) / 2);
		const res = guess(mid);
		if (res === 0) {
			return mid;
		} else if (res === 1) {
			return rec(mid + 1, high);
		} else {
			return rec(i, mid - 1);
		}
	}
	return rec(1, n);
}