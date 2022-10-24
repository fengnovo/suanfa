/*
给定一个二叉树，判断它是否是高度平衡的二叉树。
本题中，一棵高度平衡二叉树定义为：
一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
*/
// function isBalanced(root) {
//     if (root == null) {
//         return 0;
//     }
//     let isBalance = true;

//     function getDeep (node) {
//         if (node == null) {
//             return 0;
//         }
//         let left = getDeep(node.left);
//         let right = getDeep(node.right);
//         if(Math.abs(left - right) > 1) {
//             isBalance = false;
//         }


//     }
//     getDeep(root);
//     return isBalance;
// }

// 获取最大深度
function getDepth(node) {
    // 
    if (node == null) {
        return 0;
    } else {
        return Math.max(getDepth(node.left), getDepth(node.right)) + 1;
    }
}

function isBalanced(root) {
    // 如果节点为空了，就是平衡的
    if (root == null) {
        return true;
    } else {
        return Math.abs(getDepth(root.left) - getDepth(root.right)) <= 1 &&
            isBalanced(root.left) && isBalanced(root.right);
    }
}

