
function reverseKGroup(head, k) {
    let start = head;
    let end = getKnode(start, k);
    if (end === null) {
        return head;
    }
    head = end;
    reverseK(start, end);
    let lastEnd = start;
    while (lastEnd.next !== null) {
        start = lastEnd.next;
        end = getKnode(start, k);
        if (end === null) {
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
    while (--k !== 0 && start != null) {
        start = start.next;
    }
    return start;
}
// 链表开头和结尾都知道，将链表按k反转，  a->b->c->d => d <- a <- b <- c
function reverseK(start, end) {
    end = end.next;
    let prev = null;
    let cur = start;
    let next = null;
    while (cur !== end) { //这是引用对比
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    start.next = end;
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


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const n1 = new Node('1');
const n2 = new Node('7');
const n3 = new Node('3');
const n4 = new Node('2');
const n5 = new Node('7');
const n6 = new Node('0');
const n7 = new Node('1');
const n8 = new Node('0');
const n9 = new Node('0');
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
n7.next = n8;
n8.next = n9;
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
list(n1);
list(reverseKGroup(n1, 4))