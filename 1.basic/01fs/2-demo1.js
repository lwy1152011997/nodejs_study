const fs = require('fs');

fs.readFile('../static/grade-2-demo.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log('读取失败:', err);
        return `'读取失败:', ${err}`;
    }
    
    // 读取成功
    const oldData = data.split(' ');
    let dataArr = [];

    oldData.forEach(item => {
        dataArr.push(item.replace('=', ':'));
    })
    
    const newData = dataArr.join('\r\n'); // join方法, 将数组所有项,按照指定的符号合并,返回一个新字符串
    
    fs.writeFile('../static/grade-2-demo-fromate.txt', newData, (err) => {
        if (err) {
            console.log('写入失败:', err);
            return `'写入失败:', ${err}`;
        }

        console.log('写入成功');
    })
})