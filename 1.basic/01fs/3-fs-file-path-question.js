/**
 * fs模块的动态拼接路劲问题
 * 在使用fs模块操作文件时, 如果使用的路径时./ 或 ../这样的相对路径, 会比较容易出现动态路径拼接上的一些问题
 * 出现问题的原因:
 *  我们执行node命令,运行代码时
 *  被操作文件的路径会动态的拼接出来: 
 *  以执行node命令所在的目录为基准, 然后动态拼接出操作文件的完整路径
 */

const fs = require('fs');
const path = require('path');


// 错误路径演示
// fs.readFile('../static/write.txt', 'utf8', function(error, data) {
// cd .. 回到上一级目录  D:\0_stack\nodejs\1.basic>
// node .\01fs\3-fs-file-path-question.js 路径执行
// 得到错误: no such file or directory, 
// 实际node环境拼接的路劲时这样的:open 'D:\0_stack\nodejs\static\write.txt'
// 
// if(error) {
//     console.log('文件读取失败:', error);
//     return `文件读取失败: ${error}`;
// }

// console.log('文件读取成功:', data);
// })

// 解决问题:
// 1. 直接写一个文件的完整路劲(绝对路劲), 写死了,不易于后期维护
// 2. 使用:
// __dirname 当前使用node执行文件所在的文件夹目录
// __filename  当前使用node执行文件所在的目录
const readPath = path.join(__dirname, '../', '/static/write.txt');
fs.readFile(readPath, 'utf8', function(error, data) {
    if(error) {
        console.log('文件读取失败:', error);
        return `文件读取失败: ${error}`;
    }

    console.log('文件读取成功:', data);
})
console.log(__dirname);
console.log(__filename);
