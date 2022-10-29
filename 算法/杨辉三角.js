/**
给定非负整数numRows，生成Pascal三角形的第一个numRows。
在Pascal的三角形中，每个数字是它上面两个数字的总和。
输入： 5
输出：

[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
**/
// num是多少行的意思
function pascal(num) {
	if (num === 0) {
		return []
	}
	let arr = [
		     [1],  		// 0----1
		    [1,1],		// 1----2
		 //   [1,2,1],		// 2----3
		 //  [1,3,3,1]		// 3----4
		 // [1,4,6,4,1]
	];
	for(let i = 1; i < num; i++) { // arr的第i行
		let thrid = [1]; //  i + 2; // 第i+ 1行的数组长度i+2
		for(let j = 1; j< i + 1; j ++ ) { // 要求第i+ 1行的数组，第一个和最后一个已经知道
			thrid[j] = arr[i][j - 1] + arr[i][j];
		}
		thrid[i + 1] = 1;
		arr[i + 1] = thrid;
	}
	return arr
}
console.log(pascal(7));
