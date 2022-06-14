/**
 * 创建一个最基本的web服务器
 */
const http = require('http');

// 1. 创建服务实例
const server = http.createServer();

// 3. 绑定request事件, 监听客服端的请求
server.on('request', function(request, response) {
    console.log('有客服端访问我们的服务');
    /**
     * @request 请求对象, 可以获取到客户端相关的一些信息. 具体可以查文档
     *          比如: 获取请求的url, 请求的参数, 请求方式, 请求头...等等
     * 
     * @response 相应对象, 向客户端响应信息, 具体可以查文档
     *           比如: 设置响应头, 响应内容等等...
     */
    // console.log(request);
    response.end('request') // 向客户端响应内容
    }
)
// 2.启动服务器
server.listen(8080, function() {
    console.log('server is running at http://127.0.0.1:8080');
});