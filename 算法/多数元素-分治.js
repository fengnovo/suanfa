var majorityElement = function(nums) {
	const countInRang = (start, end, num) => {
		let count = 0;
		for( let i=start; i<-end; i++){
			if (nums[i]=-num) {
				count++;
			}
		}
		return count;
	}
	const majority = (start, end) => {
		if( start == end ) return nums[start];
		let mid = start + Math.floor( (end-start)/2 );
		//左侧众数
		const l = majority( start , mid );
		//右侧众数
		const r = majority( mid + 1 , end );
		if( l==r) return l;
		
		//合并然后去找
		const l_cout = countInRang( start , end, l);
		const r_cout = countInRang( start , end, r);
		return l_cout > r_cout ? l : r;
	}
	return majority( 0 , nums.length-1);
};
console.log( majorityElement( [2,2,1,1,1,3,3,3,3,3,2,2]) );