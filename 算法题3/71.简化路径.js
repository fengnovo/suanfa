var simplifyPath = function (path) {
    const arr = path.split('/'); //  ['', 'a', '.', 'b', '..', '..', 'c', '']
    let stack = [];

    arr.forEach(item => {
        if (item && item === '..') {
            stack.pop();
        } else if (item && item !== '.') {
            stack.push(item)
        }
    });
    console.log('stack--->', stack);
    const str = stack.length ? '/' + stack.join('/') : '/';
    console.log('结果--->', str);
    return str;
};

// const path = "/a/./b/../../c/";  // 有一个.时是当前目录，..是上一级目录, 当前目录的可以删除
const path = '/a/./b';
simplifyPath(path)