const fs = require('fs');

/**
 * 向指定的文件写入内容 API
 * fs.writeFile(filePath, data[, iptions], callback(err))
 * filePath 写入的路径
 * data 写入的内容
 * options 可选参数,以什么编码方式写入,默认为utf-8
 * callback, 回调函数获取到读取的结果, 无论读取成功还是失败都会执行
 */

 fs.writeFile('../static/write.txt', 'hello hello', (error) => {
    // 路径下, 如果有这个文件就写入, 没有这个文件就会新建再写入
    if(error) {
        console.log('文件写入取失败:', error);
        return `文件写入取失败: ${error}`;
    }
    
    console.log('文件写入取成功');
 })
