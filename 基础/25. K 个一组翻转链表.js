// 单链表，按k组，组合链表，返回一条链表的head
/**
 https://leetcode.cn/problems/reverse-nodes-in-k-group/
K个节点的组内逆序调整
给定一个单链表的头节点head，和一个正数k
实现k个节点的小组内部逆序，如果最后一组不够k个就不调整
例子：
调整前：1->2->3->4->5->6->7->8,k=3
调整后：3->2->1->6->5->4->7->8
 */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// 返回最终链表的head
function reverseKlist(head, k) {
    let start = head;
    let end = getKnode(start, k);
    if (!end) {
        return head;
    }
    head = end;
    reverseK(start, end);
    let lastEnd = start;
    while (lastEnd.next) {
        start = lastEnd.next;
        end = getKnode(start, k);
        if (!end) {
            return head;
        }
        reverseK(start, end);
        lastEnd.next = end;
        lastEnd = start;
    }
    return head;
}
// 传入start开始的链表，获取随意一组的第k个node,返回第K个node 有可能不够K个
function getKnode(start, k) {
    if (start === null) {
        return null;
    }
    let head = start;
    for (let i = 1; i < k; i++) {
        if (head) {
            head = head.next;
        }
    }
    return head;
}
// 链表开头和结尾都知道，将链表按k反转，  a->b->c->d => d <- a <- b <- c
function reverseK(start, end) {
    end = end.next; // 要改引用
    let prev = null;
    let cur = start;
    while (cur !== end) { //这是引用对比
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    start.next = end;
    // let x = end;
    // let str = '';
    // while (x) {
    //     str = str + x.val + ' => '
    //     x = x.next;
    // }
    // console.log(str);
}
// 单链表反转，  a->b->c->d->null => null <- a <- b <- c <-d 
function reverse(head) {
    let prev = null;
    let cur = head;
    while (cur) {
        const next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return prev;
}

function list(head) {
    let cur = head;
    let str = '';
    while (cur) {
        str = str + cur.val + ' => '
        cur = cur.next;
    }
    console.log(str);
    console.log('----------');
}

let linkedList = {};
const n1 = new Node('1');
const n2 = new Node('2');
const n3 = new Node('3');
const n4 = new Node('4');
const n5 = new Node('5');
const n6 = new Node('6');
const n7 = new Node('7');
const n8 = new Node('8');
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
// console.log(getKnode(n1, 5));
list(n1);
list(reverseKlist(n1, 2))
// list(reverse(n1));

// reverseK(n2, n4)