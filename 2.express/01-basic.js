/**
 * express创建最基本的web服务器
 */
const express = require('express');

const app = express();

app.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})