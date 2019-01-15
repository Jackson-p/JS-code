# oj

这一部分就是来记录js的一些简单算法，或者是完成一些功能。感觉以后刷算法应该不会用js，但以前的可留念的结果可记录在此。

## 读取

从oj上读取数据

> 读字符串

    while(line = readline()){
    var str = line.trim();
    ...
    }

> 读取变量

    var line;
    while(line = readline().spilt(' ')){
        var a = line[0]; // 如果是要读取整数就要用parseInt函数转化一下
        var b = line[1];// 所以说js写oj一定要注意输入输出的弱类型转化问题
        ...
    }

