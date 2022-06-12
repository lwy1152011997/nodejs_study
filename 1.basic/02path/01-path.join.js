const path = require('path');

/**
 * 路劲拼接的问题一般都是使用 path.join([...path]) 方法解决
 */
const pathStr = path.join('a', '/b/c', '../', '/d/e');
console.log(pathStr); // a/b/d/e