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

    resolveCss(dataStr);
    resolveJs(dataStr);
    resolveHtml(dataStr);
 })

 // 处理css
 function resolveCss(cssString) {
    const cssStr = styleReg.exec(cssString); // 得到一个['style标签内的css样式字符串']
    const _css = cssStr[0].replace('<style>', '').replace('</style>', '');
    
    fs.writeFile(path.join(__dirname, '../project-demo/index.css'), _css, function(err) {
        if (err) {
            console.log(`文件写入失败:${err}`);
            return;
        }
        console.log(`文件写入成功`);
    })
 }

 // 处理js
 function resolveJs(jsString) {
    const jsStr = jsReg.exec(jsString);
    const _js = jsStr[0].replace('<script>', '').replace('</script>', '');

    fs.writeFile(path.join(__dirname, '../project-demo/index.js'), _js, function(err) {
        if (err) {
            console.log(`文件写入失败:${err}`);
            return;
        }
        console.log(`文件写入成功`);
    })
 }

 // 处理html
 function resolveHtml(htmlString) {
    // 标签替换
    const htmlStr = htmlString
                        .replace(styleReg, `<link rel="stylesheet" href="./index.css" />`)
                        .replace(jsReg, `<script src="./index.js"></script>`);

    fs.writeFile(path.join(__dirname, '../project-demo/index.html'), htmlStr, function(err) {
        if (err) {
            console.log(`文件写入失败:${err}`);
            return;
        }
        console.log(`文件写入成功`);
    })
 }