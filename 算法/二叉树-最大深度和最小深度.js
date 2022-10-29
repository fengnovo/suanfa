

// 非递归求二叉树最大深度，用BFS （判断根左右）
function maxDepth(head) {
    if (dead == null) {
        return 0;
    }
    let stack = [head, null];//null用了标记节点的结束
    let depth = 1;
    while (stack.length > 0) {
        let node = stack.shift();

        if (node === null) {
            if (stack.length === 0) {
                return depth;
            }
            depth++;
            stack.push(null);
            // 2, [left, null] 或者 [right, null] 或者 [left, right, null]
        } else {
            node.left && stack.push(node.left);
            node.right && stack.push(node.right);
            // 1, [null, left] 或者 [null, right] 或者 [null, left, right]
        }
    }
}