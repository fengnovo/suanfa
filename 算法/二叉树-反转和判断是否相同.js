const tree = {
	val: '1',
	left: {
		val: '2',
		left: {
			val: '4',
			left: { val: '8', left: null, right: null },
			right: { val: '9', left: null, right: null }
		},
		right: { val: '5', left: null, right: null }
	},
	right: {
		val: '3',
		left: { val: '6', left: null, right: null },
		right: { val: '7', left: null, right: null }
	}
};

// 二叉树反转
var invertTree = function (root) {
	if (root == null) return null;

	let tmp = root.left;
	root.left = root.right;
	root.right = tmp;

	invertTree(root.left);
	invertTree(root.right);
	return root;
};

// 二叉树是否相同
var isSameTree = function (p, q) {
	if (p === null && q === null) return true;
	if (p === null || q === null) return false;
	if (p.val !== q.val) return false;
	return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// console.log( isSameTree(tree1, tree2));











