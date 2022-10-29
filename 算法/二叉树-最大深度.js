// 二叉树最大深度
var maxDepth = function (root) {
	if (!root) return 0;
	const stack = [root];
	let num = 0;
	while (stack.length) {
		let len = stack.length;
		num++;
		while (len--) {
			const o = stack.shift();
			o.left && stack.push(o.left);
			o.right && stack.push(o.right);
		}
	}
	return num;
};
// console.log(maxDepth(tree));


var maxTree = (node) => {
	if (node === null) {
		return 0;
	}
	let leftDeep = maxTree(node.left) + 1;
	let rightDeep = maxTree(node.right) + 1;
	return Math.max(leftDeep, rightDeep);
}