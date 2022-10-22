/**
 *
 	左: 		2* index +1
	右: 		2* index +2
	找父: 	( index-1 ) / 2      （堆3.png）

	最小堆对于 取第几大或 第几小的场景 非常有效（堆5.png）
 */
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


let arr = new MinHeap();
arr.insert( 5 );
arr.insert( 4 );
arr.insert( 6 );
arr.insert( 1 );
arr.pop();
console.log( arr );
console.log( arr.size());
console.log( arr.peek());






