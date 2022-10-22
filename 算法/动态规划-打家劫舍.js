var rob = function(nums) {
	const len = nums.length;
	if( len == 0 ) return 0;
	// 打家劫舍  动态规划
	const dp = [0, nums[0]];
	for( let i=2; i<=len; i++){
		dp[i] = Math.max( dp[i-1] , dp[i-2] + nums[i-1] )
	}
	return dp[len];

};
console.log( rob([1,2,3]))