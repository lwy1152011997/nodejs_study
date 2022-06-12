/**
 * 需求: 将文件拆分为: html css js 三个文件, 并存放到指定文件夹
 * 实现:
 * 1. 正则匹配style标签 和 script标签
 * 2. fs模块读取文件
 * 3. 写入html css js文件到指定文件夹
 */
 const path = require('path');
 const fs = require('fs');

 const styleReg = /<style>[\s\S]*<\/style>/; // 匹配style标签中的内容
 const jsReg = /<script>[\s\S]*<\/script>/; // 匹配script标签中的内容

 fs.readFile(path.join(__dirname, '../static/demo1.html'), 'utf-8', function(err, dataStr) {
    if (err) {
        console.log(`文件读取失败:${err}`);
        return;
    }
 })