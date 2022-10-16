const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors());
app.use(express.json());




const mysql = require('mysql2')
const db = mysql.createConnection({
    user: "root",
    host:"localhost",
    password:"password",   //it could be '' or 'password'
    database:'employeesystem'
});

//creating a request (an api end point)
//request is taking something from our frontend
//response is sending data to the frontend
app.post("/create", (request, response)=>{

    //lets get the variables from our frontend first
    const name = request.body.name   //this line is taking the variable named "name" from the fronted
    const age = request.body.age
    const country = request.body.country
    const position = request.body.position
    const wage = request.body.wage

    db.query("INSERT INTO employee (name, age, country, position, wage) VALUES (?, ?, ?, ?, ?)", [name, age,country, position, wage], (err, res)=>{
        if (err){
            console.log(err)
        }else{
           response.send(res)
        }
    });
});


app.get("/employees", (request, response)=>{
        db.query("SELECT * FROM employee;", (err,res)=>{
            if(err){
                console.log(err)
            } else{
                response.send(res)
            }
        })
});













app.listen(3001, ()=>{
    console.log("Connection to server established")
})



