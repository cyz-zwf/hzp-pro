//引入第三方模块 express express-session mysql cors 
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session =require("express-session")
//数据库连接池
var pool= mysql.createPool({
    host:"127.0.0.1",
    port:3306,
    user:"root",
    password:"",
    database:"hzp",
    connectionLimit:15
});

var app=express();
app.use(cors({
    origin :["http://127.0.0.1:8888","http://localhost:8888" ],
    credentials:true
}))

//配置session
app.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
}));

app.use(express.static("public"));
app.listen(5050);