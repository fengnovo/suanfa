/**
https://leetcode.cn/problems/merge-two-sorted-lists/
 两个有序链表的合并
给定两个有序链表的头节点head 1 和head2,返回合并之后的大链表，要求依然有序
例子 1->3->3->5->7 
    2->2->3->3->7
返回 1->2->2->3->3->3->3->5->7
 */

// function merge(head1, head2) {
//     let arr1 = linkListToArray(head1);
//     let arr2 = linkListToArray(head2);
//     console.log(arr1);
//     console.log(arr2);
//     const arr = arr1.concat(arr2);
//     arr.sort((a, b) => b - a);
//     return arrayToLinkedList(arr, arr.length)
// }

// function linkListToArray(head) {
//     let arr = [];
//     let cur = head;
//     while (cur) {
//         arr.unshift(cur.val);
//         cur = cur.next;
//     }
//     return arr;
// }

// function arrayToLinkedList(array, n) {
//     if (n === 0) {
//         return null;
//     }
//     return { val: array[n - 1], next: arrayToLinkedList(array, n - 1) }
// }

function list(head) {
    let str = '';
    let cur = head;
    while (cur) {
        str = str + cur.val + ' => ';
        cur = cur.next;
    }
    console.log(str);
}

function merge2(head1, head2) {
    if (head1 === null) {
        return head2;
    }
    if (head2 === null) {
        return head1;
    }
    const head = head1.val < head2.val ? head1 : head2; // 最后需要返回的头
    let cur1 = head.next;
    let cur2 = head === head1 ? head2 : head1;
    let prev = head; // prev是虚拟的链表都，通过遍历移动虚拟链表，操作真实链表，真实链表头还是head。
    while (cur1 !== null && cur2 !== null) {
        if (cur1.val > cur2.val) {
            prev.next = cur2;
            prev = cur2;
            cur2 = cur2.next;
        } else {
            prev.next = cur1;
            prev = cur1;
            cur1 = cur1.next;
        }
    }
    // 将剩下的节点接上
    if (cur1 !== null) {
        prev.next = cur1;
    }
    if (cur2 !== null) {
        prev.next = cur2;
    }
    return head;
}


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const n1 = new Node(1);
const n2 = new Node(3);
const n3 = new Node(3);
const n4 = new Node(5);
const n5 = new Node(7);

const n6 = new Node(2);
const n7 = new Node(2);
const n8 = new Node(3);
const n9 = new Node(3);
const n10 = new Node(7);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

n6.next = n7;
n7.next = n8;
n8.next = n9;
n9.next = n10;

list(n1);
list(n6);
list(merge2(n1, n6));