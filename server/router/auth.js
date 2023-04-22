
const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('../db/conn');
const User = require('../model/userSchema');



//sign up

router.post('/register', async (req,res) => {

    const { name, email, phone, work, password, cppassword}= req.body;

    if(!name || !email || !phone || !work || !password || !cppassword)  {
        return res.status(422).json({error: "please fill properly"});
    }
    try{

        const userExist = await User.findOne({email: email});

        if(userExist)   {
            return res.status(422).json({error: "Email already Exist"});
        } else if(password!=cppassword){
            return res.status(422).json({error: "password are not matching"});
        } else {
            const user = new User({name, email, phone, work, password, cppassword});

            await user.save();
            return res.status(201).json({message: "User Registred successfully"});
        }
         
        }catch(err) {
            console.log(err);

    }
    

    
});


//login route

router.post('/signin', async(req, res) =>
{
    
    try{
        let token;
        const { email, password} = req.body;

        if(!email || !password){
            return res.status(400).json({error: 'plz filled data'});
        }

        const userLogin = await User.findOne({email: email});

        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            });
                

            if(!isMatch){
                res.status(400).json({error: "User Error"});
           } else {
                   res.json({message: "Successfully"});
           } 
        }
           else {
            res.status(400).json({error: "Invalid"});
           }
   
       } catch(err){
        console.log(err);
        }

        

        

     

});

module.exports = router;
