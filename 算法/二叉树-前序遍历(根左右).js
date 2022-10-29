// 前序遍历(根左右)
var preorderTraversal1 = function (root) {
	let arr = [];
	var fun = (node) => {
		if (node) {
			//先根节点
			arr.push(node.val);
			//遍历左子树
			fun(node.left);
			//遍历右子树
			fun(node.right);
		}
	}
	fun(root);

	return arr;
}

// 前序遍历（以栈的形式）
var preorderTraversal = function (root) {
	if (!root) return [];
	let arr = [];
	//根节点入栈
	let stack = [root];
	while (stack.length) {
		//出栈
		let o = stack.pop();
		arr.push(o.val);
		o.right && stack.push(o.right);
		o.left && stack.push(o.left);
	}
	return arr;
}


// console.log(preorderTraversal(tree))
