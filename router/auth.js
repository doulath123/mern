const express=require('express');
const jwt=require('jsonwebtoken')
const bcrypt=require("bcrypt")
const router=express.Router();
const authenticate=require("../middleware/authenticate")
require("../db/conn")
const User=require('../model/userSchema')
router.get('/', (req,res)=>{
    res.send('Hello world from the server router.js')
});
router.post("/register", async (req,res)=>{
    const {name,email, phone, work, password, cpassword}=req.body;
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"plz"});
    }
    try{
      const userExist= await  User.findOne({email:email})
      if(userExist){
        return res.status(422).json({err:'email already exist'})
    }
    else if(password!==cpassword)
    {
        return res.status(422).json({err:"password not matching"})
    }else{
        const user=new User({name, email, phone, work, password, cpassword})
        //hash pass
    
        await user.save();
        
            res.status(201).json({message:"user registered auccessfully"})
    }

    
    // else{
    //     res.status(500).json({error:"faid to registered"})
    // }
    //   .then((userExist)=>{
    //         if(userExist){
    //             return res.status(422).json({err:'email already exist'})
    //         }
    //         const user=new User({name, email, phone, work, password, cpassword})
    //         user.save().then(()=>{
    //             res.status(201).json({message:"user registered auccessfully"})
    //         }).catch((err)=>res.status(500).json({error:"faid to registered"}))
    //     })

    }catch(err){
        console.log(err)

    }
    

    // console.log(name);
    // // res.json({message:req.body})
    // // res.send("mera")

});

// Login route

router.post('/signin', async(req,res)=>{
    // // console.log(req.body);
    // res.json(req.body)
try{
const {email, password}=req.body;
if(!email || !password){
    return res.status(400).json({err:"plz filled the data"})
}
const userLogin= await User.findOne({email:email});
// console.log(userLogin);
if(userLogin){
    const isMatch=await bcrypt.compare(password, userLogin.password);
    const token= await userLogin.generateAuthToken();
    console.log(token);
res.cookie("jwtoken", token, {
    expires:new Date(Date.now()+25892000000),
    httpOnly:true
});

    if(!isMatch){
        res.status(400).json({err:"Invalid Credientials pass"})
    }else{
        res.json({message:"user signin succesfully"});
    }
    
}else{
    res.status(400).json({err:"Invalid Credientials email"})
}


}catch(err){
    console.log(err);
}
});

//about us ka page
app.get('/about',authenticate,(req, res)=>{
    console.log("hello my about")
    res.send("Hollo about World from the server")
    });



module.exports =router;