class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.last = null;
        this.size = 0;
    }
}
// 用双链表实现双端队列, 一个队列两端都可以push和pop
class DeQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // 在队列前面插入
    prevPush(val) {
        const newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else { // [2]
            newNode.next = this.head;
            this.head.last = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // 在队列后面加入
    nextPush() {
        const newNode = new Node(val);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.last = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    // 在队列前面删除
    prevPop() {
        const target = this.head;
        if (target) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next; // 先将head指向head的下一个
                this.head.last = null;
            }

        }
        if (this.head === null) {
            this.tail = null;
        }
        if (this.size > 0) {
            this.size--;
        }
        return target ? target.val : null;
    }

    // 在队列后面删除
    nextPop() {
        const target = this.tail;
        if (target) {
            if (this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.last; // 先将tail指向前一个
                this.tail.next = null;
            }
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
            head = head.next();
        }
        console.log('size---->', this.size);
    }

}
