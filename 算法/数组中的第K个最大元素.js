class MinHeap {
	constructor(){
		this.heap = [];
	}

	//换位置
	swap(i1,i2) {
		const temp = this.heap[i1];
		this.heap[i1] = this.heap[i2];
		this.heap[i2] = temp;
	}
	//找到父节点
	getParentIndex( index ) {
		return Math.floor( (index-1) /2);
	}
	//上(前)移操作
	up( index ){
		//如果是Q就不移动了
		if( index ==0 ) return;
		const parentIndex = this.getParentIndex( index ) ;
		//如果父元素大于当前元素，就开始移动
		if( this.heap[parentIndex] > this.heap [index] ){
			this.swap( parentIndex, index ) ;
			this.up( parentIndex);
		}
	}
	//获取左侧子节点
	getLeftIndex( index ){
		return index * 2 + 1;
	}
	//获取右侧子节点
	getRightIndex( index ){
		return index * 2 + 2;
	}
	//下(后)移操作
	down( index ) {
		const leftIndex = this.getLeftIndex( index );
		const rightIndex = this.getRightIndex( index );
		if( this.heap[leftIndex] < this.heap[index]){
			this.swap(leftIndex, index) ;
			this.down( leftIndex);
		}
		if( this.heap[rightIndex] < this.heap[index] ){
			this.swap(rightIndex, index) ;
			this.down( rightIndex);
		}
	}
	//添加元素
	insert( value ){
		this.heap.push( value );
		this.up( this.heap.length-1 );
	}
	//删除堆顶
	pop(){
		this.heap[0] = this.heap.pop();
		this.down( 0 );
	}
	//获取堆顶
	peek(){
		return this.heap[0];
	}
	size(){
		return this.heap.length;
	}

}

// 数组中的第K个最大元素 215
var findKthLargest = function(nums, k) {
	let arr = new MinHeap();
	nums.forEach(item => {
		arr.insert( item );
		if( arr.size() > k ) {
			arr.pop();
		}
	});
	return arr.peek();
}


// 给数组中的第4大元素返回该元素
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4
console.log(findKthLargest([3,2,15,5,4], 2)); // 5