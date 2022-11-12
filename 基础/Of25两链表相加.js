/**
 https://leetcode.cn/problems/lMSNwu/
两个链表相加
给定两个链表的头节点head1和head2，认为从左到右是某个数字从低位到高位，返回相加之后的链表
例子  4->3->6
     2->5->3
返回  6->8->9
解释 436 + 253= 689
例子  7->2->4->3
        5->6->4
返回  7->8->0->7
解释 7243 + 564= 7807
 */
class Node {
     constructor(val) {
          this.val = val;
          this.next = null;
     }
}

function add(head1, head2) {
     let length1 = getLength(head1);
     let length2 = getLength(head2);
     let max = length1 > length2 ? head1 : head2;
     let min = length1 > length2 ? head2 : head1;
     let maxLink = reverce(max);
     let minLink = reverce(min);

     let flag = 0;
     let stack = [];
     while (maxLink) {
          let sum = maxLink.val + minLink.val + flag;
          // console.log(maxLink.val, minLink.val, flag);

          if (sum >= 10) {
               flag = 1;
          } else {
               flag = 0;
          }
          stack.push(sum % 10);
          maxLink = maxLink.next;
          minLink = minLink.next ? minLink.next : { next: null, val: 0 };
     }

     if (flag === 1) {
          stack.push(1);
     }
     const node = createList(stack, stack.length);
     return node;
}

// 递归创建链表
function createList(stack, n) {
     if (n == 0) return null;
     let newNode = { next: null, val: stack[n - 1] };
     newNode.next = createList(stack, n - 1);
     return newNode;
}

function reverce(head) {
     let cur = head;
     let prev = null;
     // 反转链表
     while (cur) {
          const next = cur.next;
          cur.next = prev;
          prev = cur;
          cur = next;
     }
     return prev;
}


function addTowNumber(head1, head2) {
     if (head1 === null) {
          return head2;
     }
     if (head2 === null) {
          return head1;
     }
     head1 = reverse(head1);
     head2 = reverse(head2);
     let l = getLength(head1) > getLength(head2) ? head1 : head2; // 长链表
     let s = l === head1 ? head2 : head1;                        // 短链表
     let lastNode;
     let flag = 0;
     let cur1 = l;
     let cur2 = s;
     // 先遍历短链表
     while (cur2) {
          const sum = cur1.val + cur2.val + flag;
          if (sum >= 10) {
               flag = 1;
          } else {
               flag = 0;
          }
          cur1.val = sum % 10;

          lastNode = cur1;
          cur1 = cur1.next;
          cur2 = cur2.next;
     }

     // 再遍历长链表
     while (cur1) {
          const sum = cur1.val + flag;
          if (sum >= 10) {
               flag = 1;
          } else {
               flag = 0;
          }
          cur1.val = sum % 10;

          lastNode = cur1;
          cur1 = cur1.next;
     }


     // 最后判断flag是否需要补位
     if (flag === 1) {
          lastNode.next = {
               val: 1,
               next: null
          }
     }

     return reverse(l);
}

function reverse(head) {
     let cur = head;
     let prev = null;
     while (cur) {
          const next = cur.next;
          cur.next = prev;
          prev = cur;
          cur = next;
     }
     return prev;
}




function getLength(head) {
     let l = 0;
     let cur = head;
     while (cur) {
          l++;
          cur = cur.next;
     }
     return l;
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
const n1 = new Node(7);
const n2 = new Node(2);
const n3 = new Node(4);
const n4 = new Node(3);

const n5 = new Node(5);
const n6 = new Node(6);
const n7 = new Node(4);
// const n8 = new Node(8);

// const n9 = new Node(4);
n1.next = n2;
n2.next = n3;
n3.next = n4;

n5.next = n6;
n6.next = n7;

list(n1);
list(n5);
list(addTowNumber(n1, n5));