const tree = {
	val:'1',
	left:{
		val:'2',
		left: {val:'4', left:null, right: null},
		right:{val: '5', left:null, right:null}
	},
	right:{
		val:'3',
		left: {val: '6',left:null, right: null},
		right:{val:'7', left:null, right:null}
	}
};

// 前序遍历(根左右)
var preorderTraversal1 = function(root) {
	let arr = [];
	var fun = ( node ) => {
		if( node ) {
			//先根节点
			arr.push( node.val);
			//遍历左子树
			fun( node.left ) ;
			//遍历右子树
			fun( node.right ) ;
		}
	}
	fun( root );
	
	return arr;
}

//栈的形式
var preorderTraversal = function(root) {
	if( !root ) return [];
	let arr = [];
	//根节点入栈
	let stack = [root];
	while( stack.length ){
		//出栈
		let o = stack.pop();
		arr.push(o.val);
		o.right && stack.push( o.right );
		o.left && stack.push( o.left );
	}
	return arr;
}


// console.log(preorderTraversal(tree))


//中序遍历(非递归)
var inorderTraversal1 = function(root) {
	const arr = [];
	const stack = [];
	let o = root;
	while( stack.length || o) {
		while(o) {
			stack.push(o);
			o = o.left;
		}
		const n = stack.pop();
		arr.push( n.val);
		o = n.right;
	}
	return arr;
}
// 中序遍历 (左中右)
var inorderTraversal = function(root) {
	const arr = [];
	const fun = ( root ) =>{
		if( !root ) return;
		fun( root.left );
		arr.push( root.val);
		fun( root.right );
	}
	fun( root );
	return arr;
}
console.log( inorderTraversal(tree) ) ;

// 后序遍历
var postorderTraversal1 = function(root) {
	if( !root ) return [];
	let arr = [];
	let stack = [root];
	while( stack.length ){
		const o = stack.pop();
		arr.unshift( o.val);
		o.left && stack.push( o.left );
		o.right && stack.push( o.right );
	}
	return arr;
}

// 后序遍历 (左右根)
var postorderTraversal = function(root) {
	const arr = [];
	const fun = ( node ) =>{
		if( node ) {
			fun( node.left );
			fun( node.right );
			arr.push( node.val);
		}
	}
	fun( root );
	return arr;
};
// console.log( postorderTraversal(tree));


// 最小深度
var minDepth = function(root) {
	if( !root ) return 0;
	const stack = [ [ root, 1 ] ];
	while (stack.length) {
		const [o,n] = stack.shift();
		if( !o.left && !o.right ) {
			return n;
		}
		if( o.left ) stack.push([o.left, n+1] );
		if( o.right ) stack.push([o.right, n+1] );
	}
}
// console.log( minDepth(tree) );

// 二叉树最大深度
var maxDepth = function(root) {
	if( !root ) return 0;
	const stack = [root];
	let num = 0;
	while( stack.length ){
		let len = stack.length;
		num++;
		while( len-- ) {
			const o = stack.shift();
			o.left && stack.push(o.left );
			o.right && stack.push(o.right );
		}
	}
	return num;
};
console.log( maxDepth(tree) ) ;

// 二叉树反转
var invertTree = function(root) {
	if (root == null) return null;

	let tmp = root.left;
	root.left = root.right;
	root.right = tmp;

	invertTree(root.left);
	invertTree(root.right);
	return root;
};

// 二叉树是否相同
var isSameTree = function(p, q) {
	if( p === null && q === null ) return true;
	if( p === null || q === null ) return false;
	if( p.val !== q.val) return false;
	return isSameTree( p.left, q.left ) && isSameTree( p.right, q.right);
};
// console.log( isSameTree(tree1, tree2));











