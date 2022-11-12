class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// 用单链表实现队列，先进先出
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 往队列增加元素 
    push(val) {
        // [head = null, tail = null]
        const newNode = new Node(val);
        if (this.tail === null) { // 如果是第一个，就头和尾都是它
            this.tail = newNode;
            this.head = newNode;
        } else { // 说明之前已经往里面塞了元素， [2]
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    pop() {
        const target = this.head;
        if (target) {
            this.head = this.head.next;
        }
        if (this.head === null) { // 当只有一个元素时，上面被取出来后只剩一个空的队列
            this.tail = null;
        }
        if (this.size > 0) {
            this.size--;
        }
        return target ? target.val : null;
    }

    size() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0;
    }

    list() {
        let head = this.head;
        while (head) {
            console.log(head.val);
            head = head.next;
        }
        console.log('size--->', this.size);
    }
}

console.log('队列先进先出，1，23 2，66 3，87， 4， 11');
let queue = new Queue();
queue.push(23);
queue.push(66);
queue.push(87);
queue.push(11);
queue.list();
console.log('-----------');
queue.pop();
queue.list();
console.log('-----------');
queue.pop();
queue.list();
console.log('-----------');
queue.pop();
queue.list();
console.log('-----------');
queue.pop();
queue.list();
console.log('-----------');
queue.pop();
queue.list();
console.log('-----------');
queue.pop();
queue.list();


// 用单链表实现栈，先进后出，后进先出
class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.head) { // [1,2] 把最后一个当head
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
        }
        this.size++;
    }
    pop() {
        const target = this.head;
        if (target) {
            this.head = this.head.next;
        }
        if (this.size > 0) {
            this.size--;
        }
        return target ? target.val : null;
    }
    size() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    list() {
        let head = this.head;
        while (head) {
            console.log(head.val);
            head = head.next;
        }
        console.log('size--->', this.size);
    }
}

console.log('栈先进后出，1，23 2，66 3，87， 4， 11， 应23压在底部');
let stack = new Stack();
stack.push(23);
stack.push(66);
stack.push(87);
stack.push(11);
stack.list();
console.log('-----------');
stack.pop();
stack.list();
console.log('-----------');
stack.pop();
stack.list();
console.log('-----------');
stack.pop();
stack.list();
console.log('-----------');
stack.pop();
stack.list();
console.log('-----------');
stack.pop();
stack.list();
console.log('-----------');
stack.pop();
stack.list();





