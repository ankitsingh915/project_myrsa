
const express = require("express");
const mysql = require('mysql2')
const bodyparser = require('body-parser')
const jsonparser = bodyparser.json();

const app = express();

const cors =require('cors')
app.use(cors())

//Database connection
const connection = mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"studentDB"
});

//READ  Operation
app.get('/',(req,res)=>{
 res.send("Hii! Welcome to Backend Server")
})


// API
// getData
app.get('/getStudent',(req,res)=>{
    connection.query("select * from studentList order by 1;", (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})


//Create -- POST
app.post('/addStudent',jsonparser,(req,res)=>{
    Id_no = req.body.id
    Name = req.body.nm
    Mobile_no = req.body.mobile
    Address = req.body.addr
    connection.query(`insert into studentList values(${Id_no},'${Name}',${Mobile_no},'${Address}');`, (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})


//Update - PUT
app.put('/updateStudent/:id',jsonparser,(req,res)=>{
    Id = req.params.id

    Address = req.body.addr
    connection.query(`update studentList set Address='${Address}' where Id_no=${Id};`, (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})


//Delete
app.delete('/delStudent/:id',(req,res)=>{
    Id = req.params.id
    connection.query(`delete from studentList where Id_no=${Id};`, (err,result)=>{
        if(!err){
            res.send(result)
        }
        else{
            console.log(err)
        }
    })
})

app.listen(3000);
