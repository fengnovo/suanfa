// 1，1，2，3，5，8，13，21，34，55，89, 114

// 迭代
function febonacer(num) {
    if (num === 1) return [1];
    const arr = [1, 1];
    for (let i = 2; i < num; i++) {
        arr.push(arr[i - 2] + arr[i - 1])
    }
    return arr;
}

// console.log(febonacer(11));

// 递归
function febonacer1(num) {
    function getNumOne(x) {
        if (x === 0) return 1;
        if (x === 1) return 1;
        return getNumOne(x - 2) + getNumOne(x - 1)
    }

    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(getNumOne(i));
    }
    return arr;
}

// console.log(febonacer1(11));


const tree = {
    val: 'a',
    children: [
        {
            val: 'b',
            children: [
                { val: 'd', children: [] },
                { val: 'e', children: [] },
            ]
        },
        {
            val: 'c',
            children: [
                { val: 'f', children: [] },
                {
                    val: 'g', children: [
                        {
                            val: 'h',
                            children: []
                        },
                        {
                            val: 'i',
                            children: [
                                { val: 'j', children: [] },
                                { val: 'k', children: [] }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

function dfs(node) {
    node && node.val && console.log(node.val);
    for (let i = 0; i < node.children.length; i++) {
        dfs(node.children[i]);
    }
}

dfs(tree) //a b d e c f g


function bfs(tree) {
    let stack = [];
    stack.push(tree);
    while (stack.length) {
        let node = stack.shift();
        node.val && console.log(node.val);
        node.children && stack.push(...node.children);
    }
}
// bfs(tree) //a b c d e f g
