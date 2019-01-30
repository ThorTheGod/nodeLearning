var http = require('http');

http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    if(request.url!=="/favicon.ico"){ //消除/favicon.ico的默认访问带来的第二次执行
    console.log("用户已访问");
    response.write("欢迎访问！");
    response.end("再见");
    }
}).listen(9090);
console.log("Server running at localhost");