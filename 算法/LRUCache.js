class ListNode {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class LRUCache {
    // capacity 是最大容量
    constructor(capacity) {
        this.capacity = capacity;
        this.hashTable = {};
        this.count = 0; // 计数器，统计没有超出最大容量
        this.dummyHead = new ListNode();    // 虚拟头节点，这样好理解头节点和尾节点
        this.dummyTail = new ListNode();    // 虚拟尾节点
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    get(key) {
        let node = this.hashTable[key];
        if (node === null) {
            return -1; //要取的数据不存在，返回-1 
        }
        this.moveToHead(node); // 有数据就将当前访问的数据移到顶部

        return node.val;
    }

    // 其实就是set方法
    put(key, val) {
        let node = this.hashTable[key];
        if (node == null) {
            let newNode = new ListNode(key, val);
            this.hashTable[key] = val;
            this.count++;
            this.addToHead(newNode);
            if (this.count > this.capacity) {
                this.moveLRUItem();
            }
        } else {
            node.val = val;
            this.moveToHead(node);
        }

    }

    // 移除时间最长最老的那个节点
    moveLRUItem() {
        let tail = this.popTail();
        delete this.hashTable[tail.key];
        this.count--;
    }

    // 删除尾节点
    popTail() {
        let tail = this.dummyTail.prev;
        this.removeFromList(tail);
        return tail;
    }

    // 移动到链表头部
    moveToHead(node) {
        this.removeFromList(node);  // 先将其从list移除
        this.addToHead(node);       // 再在头部添加它
    }

    // 将node从list移除
    removeFromList(node) {
        let A = node.prev;
        let B = node.next;
        if (A || B) {
            A.next = B;
            B.prev = A;
        }
    }

    // 在头部添加node
    addToHead(node) {
        // let oldHead = this.dummyHead.next;
        // oldHead.perv = node;
        // node.perv = this.dummyHead;
        // node.next = oldHead;
        // this.dummyHead.next = node;
        node.prev = this.dummyHead;
        node.next = this.dummyHead.next;
        node.next.prev = node;
        this.dummyHead.next = node;
    }

}