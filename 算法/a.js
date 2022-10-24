var readline = require('readline');
var rl = readline.createInterface({  //初始化rl对象
	input:process.stdin,
	output:process.stdout
});

rl.setPrompt("NodeJS> ");  //定义模拟控制台命令提示符，调用时将写入 output 的提示。
rl.prompt();   //初始化模拟控制台,开启 input 流
rl.on('line', function(line){  //激活readline模块的line事件，单行数据的读取输出
	switch(line.trim()){    //trim()为去除前后空白字符
		case 'name':
		console.log("Lin Wit");
		break;
		
		case 'code':
		console.log("Node.js");
		break;
		
		case 'year':
		console.log(2022);
		break;
		
		default:
		console.log(line.trim()+" ：don't this case!");
		break;
	}
	rl.prompt();  //用于保持在接收完一次输出后，继续模拟控制台命令行
}).on('close',function(){    //激活readline模块的close事件，进程结束时触发事件
	console.log('###byebye! process end###');
	process.exit(0);  //退出进程
}).on('pause',()=>{   //激活readline模块的pause事件,输出流暂停时触发事件
	console.log("######pause######");
})
