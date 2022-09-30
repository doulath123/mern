
const dotenv=require('dotenv');

const express=require('express');
const app=express();
dotenv.config({path:"./config.env"});
require('./db/conn')
// const User=require('./model/userSchema');
app.use(express.json());
app.use(require('./router/auth'));
const PORT=process.env.PORT;

//middleware
// const middleware=(req,res, next)=>{
// console.log("middleware")
// next();
// }


// app.get('/', (req, res)=>{
// res.send("Hollo World from the server app.js")
// });
// app.get('/about',(req, res)=>{
//     console.log("hello my about")
//     res.send("Hollo about World from the server")
//     });
    app.get('/contact', (req, res)=>{
        res.cookie('Test', 'doulath')
        res.send("Hollo contact World from the server")
        });
        app.get('/signin', (req, res)=>{
            res.send("Hollo login World from the server")
            });
            app.get('/signup', (req, res)=>{
                res.send("Hollo Register World from the server")
                });


app.listen(PORT, ()=>{
    console.log(`serveris running at port no ${PORT}`, express.json())
})