const express = require("express");
const router = express.Router();
const User = require("../models/user")
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const  zxcvbn = require('zxcvbn');
zxcvbn('Tr0ub4dour&3');

router.get("/sign-up", (req, res, next) => {
  try {
    res.render("auth/sign-up");
  } catch(e) {
    next(e);
  }
});

router.post("/sign-up", (req,res,next)=>{
  const username = req.body.username
  const password = req.body.password
  const passwordStrengh = zxcvbn(password)  

  const salt = bcrypt.genSaltSync(bcryptSalt)
  const hashPass = bcrypt.hashSync(password,salt)
  //const isPassword = password.match(/[A-Z]/g)
  //if(!isPasswordOk){}

  //Making sure username and password are not empty
  console.log(passwordStrengh)
  if(username === "" || password === ""){
    res.render("auth/sign-up", {
      errorMessage: "Indicate a username and password"
    });
    return;
  }
  //Password strengh check
  if(passwordStrengh.score<3){
    res.render("auth/sign-up", {
      errorMessage : "Your password is too weak",
      warning: passwordStrengh.feedback.warning,
      suggestion : passwordStrengh.feedback.suggestions[0]
    });
  }
  

  //Making sure that user doens't exist already
User.findOne({"username":username})
  .then(user => {
    if(user!==null){
      res.render("auth/sign-up",{
      errorMessage: "The username already exists"
    })
    

  return}

  User.create({username, password: hashPass})
  .then(() => {
    res.redirect("/")
  })
  .catch(error => {
    next(error)
  })
})
  
  })
  
  router.get("/login",(req,res,next)=>{
    try{
      res.render("auth/login")
    }
    catch(e){
      next(e)
    }
  })

  router.get("/logout", (req,res,next)=>{
    req.session.destroy(()=>{
      res.redirect("/login")
    })
  })
  
  router.post("/login" ,(req,res,next) =>{
    const username = req.body.username
    const password = req.body.password

    User.findOne({"username" : username})
    .then(user => {
      //TODO check if user exists 
      if(!user){
        res.render("auth/login", {
          errorMessage: "The username doesn't exist"
        })
        return
      }
      if(bcrypt.compareSync(password, user.password)){
        req.session.currentUser=user
        res.redirect("/main")
      }else{
        res.render("auth/login",{
          errorMessage: "Incorrect password"
        })
      }
    })
  })
  module.exports = router;