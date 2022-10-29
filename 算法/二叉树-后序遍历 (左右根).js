//二叉树-后序遍历 (左右根)
var postorderTraversal = function (root) {
	const arr = [];
	const fun = (node) => {
		if (node) {
			fun(node.left);
			fun(node.right);
			arr.push(node.val);
		}
	}
	fun(root);
	return arr;
};
// console.log( postorderTraversal(tree));

// 后序遍历
var postorderTraversal1 = function (root) {
	if (!root) return [];
	let arr = [];
	let stack = [root];
	while (stack.length) {
		const o = stack.pop();
		arr.unshift(o.val);
		o.left && stack.push(o.left);
		o.right && stack.push(o.right);
	}
	return arr;
}
