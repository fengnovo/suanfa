// 单向链表删除
var deleteNode = function (node) {
	node.val = node.next.val;
	node.next = node.next.next;
}


// 单向链表去重
var deleteDuplicates = function (head) {
	if (!head) return head;
	let cur = head;
	while (cur.next) {
		if (cur.val == cur.next.val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}

	return head;
}

// 反转链表 206
var reverseList = function (head) {
	// 类似双指针，前一个时头之前的，即null；后一个时curr
	var prev = null;
	var curr = head;
	while (curr) { 	//从第一个开始
		// [1,2,3,4,5, null] ===> [2,3,4,5,1, null] ===> [3,4,5,2,1, null]
		var next = curr.next;
		curr.next = prev;
		prev = curr;
		// console.log(prev);
		curr = next;
	}
	return prev;
}






