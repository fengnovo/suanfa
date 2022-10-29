//中序遍历(非递归)
var inorderTraversal1 = function (root) {
	const arr = [];
	const stack = [];
	let o = root;
	while (stack.length || o) {
		while (o) {
			stack.push(o);
			o = o.left;
		}
		const n = stack.pop();
		arr.push(n.val);
		o = n.right;
	}
	return arr;
}
// 中序遍历 (左中右)
var inorderTraversal = function (root) {
	const arr = [];
	const fun = (root) => {
		if (!root) return;
		fun(root.left);
		arr.push(root.val);
		fun(root.right);
	}
	fun(root);
	return arr;
}
// console.log(inorderTraversal(tree));