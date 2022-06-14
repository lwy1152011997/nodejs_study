/**
 * 监听请求
 * 响应请求
 */
 const express = require('express');
 const app = express();

 // 监听浏览器的get请求
 app.get('/money', (req, res) => {
    // 获取到客户端发送的查询参数, 默认为 {}
    const params1 = req.query;
    console.log('queryParams:', params1);

    res.send('给钱谢谢') // 响应数据
 })

 app.get('/who/:name/:age', (req, res) => {
    // 获取到客户端发送动态查询参数
    const params2 = req.params; 
    console.log('queryParams:', params2);

    res.send('给钱谢谢') // 响应数据
 })

 // 监听浏览器的post请求
 app.post('/gua', (req, res) => {
    const params = req.query;
    console.log('queryParams:', params);

    res.send({
        say: '你这瓜保熟吗?'
    })
 })

 app.listen(80, () => {
    console.log('server is running at http://127.0.0.1');
})