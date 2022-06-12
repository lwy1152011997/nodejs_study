const fs = require('fs');

/**
 * 读取指定文件中的内容 API
 * fs.readFile(path [, iptions], callback(err, data))
 * path 文件路径
 * options 可选参数,以什么编码方式读取,不写的话读出来的是一串buffer, (编码选项查询文档)
 * callback, 回调函数获取到读取的结果, 无论读取成功还是失败都会执行
 */

 fs.readFile('../static/demo-data.txt', 'utf8', (error, data) => {
    if(error) {
        console.log('文件读取失败:', error);
        return `文件读取失败: ${error}`;
    }
    
    console.log('文件读取成功:', data);
 })
