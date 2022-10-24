// prices是每个时间点的价格
// 求赚最多的钱是多少
var maxProfit = function(prices) {
	let num = 0; // 赚的钱
	for(let i=1; i < prices.length; i++){
		if( prices[i] > prices[i-1] ){
			num += prices[i] - prices[i-1];
		}
	}
	return num;
}
console.log( maxProfit([7,1,5,3,6,4]));