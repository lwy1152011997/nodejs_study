const path = require('path');

const pathStr = '/a/s/d/index.html';

/**
 * 从文件路劲中获取文件名
 * path.basename(pathStr [, 文件拓展名])
 */
const fileName = path.basename(pathStr);
console.log(fileName); // index.html

const name = path.basename(pathStr, '.html');
console.log(name); // index

/**
 * 从文件路劲中获取到文件的拓展名
 */
const extName = path.extname(pathStr);
console.log(extName); // .html
