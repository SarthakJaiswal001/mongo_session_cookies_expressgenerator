var express = require('express');
var router = express.Router();
var usermodel=require("./users")//this will import the users collection from the database practice
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.ban=true//this will create a session variable ban and set it to true and this will be stored in the server side and not in the client side and this will be used to check if the user is banned or not
  res.render('index', { title: 'Express' });
});
router.get('/checkban',function(req,res){
  console.log(req.session.ban)//this will print the value of the session variable ban
  if(req.session.ban==true){//this will check if the session variable ban is true or not
  res.send("done")}
  else{
    res.send("you are banned")
  }
  //once the server is restarted the session variable will be deleted or our session gets deleted and we will have to login again to create a new session
})

router.get('/removeban',function(req,res){
  req.session.destroy(function(err){//this will destroy the session
    if(err)throw err//this will throw an error if there is an error in destroying the session
    res.send("ban removed")
  })//this will destroy the session and the session variable ban will be deleted
  res.send("done")
})
//this is create route
router.get('/create',async function(req,res){
 const createduser=await usermodel.create({//this will create a document in the users collection}
 username:"sarthak",
 age:12,
 password:"thegreat"
  })
  res.send(createduser);
})
//this is read route
router.get('/find',async function(req,res){
  const findUser=await usermodel.find()//this will find all the documents in the users collection and store it in the variable findUser in form of an array
//usermodel.findOne({username:"sarthak"})//this will find the document with the username sarthak 
  res.send(findUser);
})

router.get('/delete',async function(req,res){
  const deleteUser=await usermodel.deleteOne({username:"sarthak"})//this will delete the document with the username sarthak
  res.send(deleteUser);
})
router.get('/getall',async function(req,res){
  var allusers=await usermodel.find()
res.send(allusers)
})
router.get('/cookies',function(req,res){
  res.cookie("name","sarthak")//this will set the cookie name to sarthak
  res.send("done")
})
router.get('/getcookies',function(req,res){
  //we can access the value of the cookie by req.cookies.name from the request object from one router to another
  console.log(req.cookies.name)//this will print the cookie name
  res.send(req.cookies)//this will print all the cookies
})
router.get('/clearcookies',function(req,res){
  res.clearCookie("name")//this will clear the cookie name amd we can also clear all the cookies by res.clearCookie() , we have used res because we are clearing the cookies from the response object and not from the request object and we can also clear the cookies from the request object by req.clearCookie()
  res.send("done")
})


module.exports = router;
