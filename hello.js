var http = require("http");

var server = http.createServer(function(req,res){
    var userurl = req.url;//获取用户输入的链接
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
    if (userurl.substr(0,9) == "/student/"){//用substr（）函数调出前地址并检查是否为student
        var studentid = userurl.substr(9);//截取链接的后地址
        console.log(studentid);//检查截取的id是否符合
        if(/\d{10}/.test(studentid)){//正则，检查id长度是否满足10位
            res.end("you are seaching for students' information,id=" + studentid);}
        else{
            res.end("something wrong");
        }
    }
    else if(userurl.substr(0,9) == "/teacher/"){//用substr（）函数调出前地址并检查是否为teacher
        var teacherid = userurl.substr(9);
        if(/\d{6}/.test(teacherid)){
            res.end("you are seaching for teachers' imformation,id=" + teacherid);
        }
        else{
            res.end("wrong");
        }
    }
    else{
        res.end("wrong");
    }
})
server.listen(3000,"127.0.0.1");
