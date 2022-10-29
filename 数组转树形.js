let arrList = [
    { id: 1, name: "部门1", pid: 0 },
    { id: 10, name: "部门10", pid: 0 },
    { id: 2, name: "部门2", pid: 1 },
    { id: 3, name: "部门3", pid: 1 },
    { id: 4, name: "部门4", pid: 3 },
    { id: 6, name: "部门6", pid: 3 },
    { id: 8, name: "部门8", pid: 3 },
    { id: 7, name: "部门7", pid: 4 },
    { id: 5, name: "部门5", pid: 4 },
    { id: 9, name: "部门9", pid: 8 },
];
var treeList = [
    {
        title: '系统管理',
        parentName: '',
        parentId: 0,
        id: 1,
    },
    {
        title: '菜单管理',
        parentName: '系统管理',
        parentId: 1,
        id: 11,
    },
    {
        title: '菜单新增',
        parentName: '菜单管理',
        parentId: 11,
        id: 111,
    },
    {
        title: '菜单编辑',
        parentName: '菜单管理',
        parentId: 11,
        id: 112,
    },
    {
        title: '菜单删除',
        parentName: '菜单管理',
        parentId: 11,
        id: 113,
    },
    {
        title: '角色管理',
        parentName: '系统管理',
        parentId: 1,
        id: 22,
    },
    {
        title: '角色新增',
        parentName: '角色管理',
        parentId: 22,
        id: 221,
    },
    {
        title: '角色编辑',
        parentName: '角色管理',
        parentId: 22,
        id: 222,
    },
    {
        title: '角色删除',
        parentName: '角色管理',
        parentId: 22,
        id: 223,
    },
    {
        title: '用户管理',
        parentName: '系统管理',
        parentId: 0,
        id: 33,
    },
    {
        title: '用户新增',
        parentName: '用户管理',
        parentId: 33,
        id: 331,
    },
    {
        title: '用户编辑',
        parentName: '用户管理',
        parentId: 33,
        id: 332,
    },
    {
        title: '用户删除',
        parentName: '用户管理',
        parentId: 33,
        id: 333,
    }
];
// O(n)
function getTree(arr) {
    let obj = {}
    treeList = [];
    arr.forEach((item, index) => {
        obj[item.id] = item
        // console.log(item.pid + ' --item.pid ---> ', obj[item.pid]);
        if (obj[item.pid]) {
            if (obj[item.pid].children) {
                obj[item.pid].children.push(item)
            } else {
                obj[item.pid].children = [item]
            }
        } else {
            treeList.push(item)
        }
        // console.log(index + ' ---> ', obj);
    })
    return treeList
}
console.log(JSON.stringify(getTree(arrList), null, 2));

// O(n)
function getTreeList(arr) {
    let obj = {}, treeList = [];
    arr.forEach((item, index) => {
        obj[item.id] = item
        if (obj[item.parentId]) {
            if (obj[item.parentId].children) {
                obj[item.parentId].children.push(item)
            } else {
                obj[item.parentId].children = [item]
            }
        } else {
            treeList.push(item)
        }
    })
    return treeList
}
// console.log(JSON.stringify(getTreeList(treeList)))