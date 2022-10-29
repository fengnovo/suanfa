// 状态转移方程
//              / dp[右孩子] + 1 ，左孩子为null
// dp[非叶子] =    dp[左孩子] + 1 ，右孩子为null
//              \ min(dp[左孩子], dp[右孩子]) + 1 ，左右孩子都不为null
var minTree = (node) => {
	if (node === null) {
		return 0;
	}
	let leftDeep = minTree(node.left) + 1;
	let rightDeep = minTree(node.right) + 1;
	return Math.min(leftDeep, rightDeep);
}
console.log(minTree(tree));

// https://leetcode.cn/problems/minimum-depth-of-binary-tree/solution/bfshe-dfsliang-chong-fang-shi-jie-jue-by-g4eh/
var minDepth2 = function (root) {
	if (root == null) {
		return 0;
	}
	if (root.left != null && root.right != null) {
		return Math.min(minDepth2(root.left), minDepth2(root.right)) + 1;
	}
	if (root.left == null) {
		return minDepth2(root.right) + 1;
	}
	if (root.right == null) {
		return minDepth2(root.left) + 1;
	}
}



var minDepth = function (root) {
	if (!root) return 0;
	const stack = [[root, 1]];
	while (stack.length) {
		const [o, n] = stack.shift();
		if (!o.left && !o.right) {
			return n;
		}
		if (o.left) stack.push([o.left, n + 1]);
		if (o.right) stack.push([o.right, n + 1]);
	}
}
console.log(minDepth2(tree));






