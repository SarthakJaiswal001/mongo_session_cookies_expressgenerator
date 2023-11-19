var express = require('express');
var router = express.Router();
var mongoose=require("mongoose")//this will import the mongoose module

mongoose.connect("mongodb://127.0.0.1:27017/practice");//this will connect to the database practice in the mongodb server and if the database is not present then it will create a database of name practice in the mongodb server and if the database is present then it will connect to the database practice in the mongodb server

const userschema=mongoose.Schema({//this will create a schema for the collection users in the database practice
  username:String,
  password:String,
  age:Number
})
//a database is created of name practice and a collection is created of name users and a document is created in the collection users
module.exports=mongoose.model("users",userschema);//this will create a collection named users in the database practice
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
