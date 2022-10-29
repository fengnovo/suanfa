var readline = require('readline');
var rl = readline.createInterface({  //初始化rl对象
    input: process.stdin,
    output: process.stdout
});

class test {
    main(args) {
        rl.setPrompt("NodeJS> ");
        rl.prompt();
        var n = scan.nextInt();
        for (let i = 0; i < n; ++i) {
            let m = scan.nextInt();
            for (let j = 0; j < m; ++j) {
                System.out.print(Character.toUpperCase(scan.next().charAt(0)));
            }
            System.out.println("");
        }
        scan.close();
    }
}