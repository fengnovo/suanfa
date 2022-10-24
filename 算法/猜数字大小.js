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