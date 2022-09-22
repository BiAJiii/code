const express = require('express');


const app = express();

app.get('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello world!server');
});


app.get('/ie',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello world!IE');
});

app.get('/delay',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    setTimeout(()=>{
        response.send('延迟响应');
    },3000);
});

app.post('/server',(request,response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.send('Hello POST!');
});




//4. 监听端口启动服务
app.listen(8000,()=>{
    console.log("服务已启动，8000端口监听中...");
});