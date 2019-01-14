const db=require("./db")
var express = require('express');
const bodyParser = require('body-parser');
var app=express();

db.setUpConnection()
// kap e hastatum db-i het
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", ["GET", "PUT", "POST", "DELETE", "OPTIONS"]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const resSend=(data, count)=>{
    return {
        data: [{
            count: count,
            type: "person",
            attributes: data,
        }]
    }
}

app.get("/",(req, res)=> {

    db.GetTodo()
        .then(data => {

            db.Count()
                .then(count => {
                    res.send(resSend(data, count,))

                })
        })
})

app.post("/",(req, res)=>{
    db.PostTodo(req.body)
    db.Count()
        .then(count=> {
            db.GetTodo()
                .then(data=>{
                    res.send(resSend(req.body, count))
                })
        })
})

var server = app.listen(3001, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
console.log()