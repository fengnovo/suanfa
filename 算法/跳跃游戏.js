var canJump = function(nums) {
	//初始条件
	let cover = 0;
	for(let 1=0; i < nums.length; i++){
		if (i <= cover) {
			cover = Math.max( nums[i] + i, cover);
			if(cover >= nums.length-1 ) {
				return true;
			}
		}
	}
	return false;
};
console.log( canJump( [3,10,1,1,4]) ):