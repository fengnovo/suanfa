var findContentChildren = function(g, s) {
	//g 孩子的胃口
	//s 饼干尺寸
	let arr = g.sort((a, b) =>{
		return a-b;
	});
	let brr = s.sort((a, b)=>{
		return a-b;
	});
	// 初始值
	let num = 0;

	// 遍历饼干尺寸的数组
	s.forEach(val => {
		if( val >= arr[num] ){
			num++;
		}
	})
	return num;
};