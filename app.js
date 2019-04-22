var express = require('express');
var myapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');

var mysequelize = require('./Configs/dbconfigs')
var usermodel = require('./models/UsersModel');
console.log(mysequelize);
// var mysql = require('mysql');
// const Sequelize = require('sequelize');
// var usermodel = require('./models/UsersModel')
// console.log(mysequelize);













myapp.use(bodyParser.urlencoded({extended:true}))
myapp.use(bodyParser.json());
myapp.use(express.static(
	path.join(__dirname, 'resources')
	));
myapp.set('views', __dirname+'/views');
myapp.set('view engine', 'ejs');


var mystorage = multer.diskStorage({

destination : function(req,file,cb){
	cb(null,'resources/uploads')
},

filename : function(req,file,cb){
// let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
// 	 cb(null, file.fieldname+ext)
	cb(null,'sdfsdfsdf')
}

})
var upload = multer({ storage: mystorage })
// const sequelize = new Sequelize('softwaricahotel', 'root', '' ,{
// 	host: 'localhost',
// 	dialect : 'mysql'
// });

// sequelize 
// .authenticate()
// .then(function(result){console.log('Conne')},function(err){})
// // .then(function(){
// //     console.log('Connection has been established successfully.');

// // })
// // .catch(function(err){
// // 	console.log(err);
// // })
// console.log('I am here');






// var connection = mysql.createConnection({

// 	host: 'localhost',
// 	user: 'root',
// 	password:'',
// 	database:'softwaricahotel'
// })
// connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
// connection.end();




myapp.get('/admin/login', function(req,res){
res.render('backend/login', {message:''});
})

myapp.get('/admin/registration', function(req,res){
	res.render('backend/registration');
})


myapp.post('/admin/registration',upload.single('userphoto'),function(req,res,next){
console.log('test');
console.log(req.file);
	// res.send({"test":"sdfsf"})
})






















// .post('/admin/registration', upload.single('userphoto'), function(req,res,next){
// console.log(req.file); 
// console.log(req.body);
// // res.status(202).json({'successs':'1'})
// res.status(201).send({ success: true })

// })

// myapp.post('/admin/registration', upload.single('userphoto'), function(req,res,next){

// console.log(req.file);
// console.log(req.body);
// console.log(req.body.username,req.body.password)
// req.xyz = 'testval';
// next();

// }, function(req,res,next){

// console.log(req.xyz);
// res.status(200).send({ 'success':true })

// })


// myapp.get('/admin/registration', function(req,res){

// 	res.render('backend/registration');
// })

myapp.listen(process.env.PORT);

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'resources/uploads')
//   },
//   filename: function (req, file, cb) {

//   	var teststring= 'softwarica hotel';
//   	console.log(teststring.substring(0,5));
//   	console.log(teststring.lastIndexOf('s'));

//   	file.originalname.lastIndexOf('.')

//   	console.log(file.originalname.substring(file.originalname.lastIndexOf('.'),file.originalname.length))

//   	// file.originalname.lastIndexOf(.)
// let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
// console.log(ext);
//     cb(null, file.fieldname+ext)
//   }
// })

// var upload = multer({ storage: storage })