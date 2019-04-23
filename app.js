var express = require('express');
var myapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');

var usermodel = require('./models/UsersModel');


// usermodel.create({
// 	username: 'ram',
// 	password: 'gggggg',
// 	userphoto: 'imaga',
// 	testval: 'eeeee'
// })
// .then(function(user){
// // console.log(user)
// console.log(user.get({
//     plain: true
//   }))

// })
// .catch(function(err){
// console.log('in error');
// console.log(err)
// })
// usermodel.findOne({
// 	where: { username : 'test'},
// 	attributes: ['id', 'password']
// })
// .then(function(user){
// 	console.log(user.dataValues);
// })
// .catch(function(err){

// })

// usermodel.findAll({
// 	where: {id:3}
// })
// .then(function(result){
// 	console.log(result[0].dataValues)
// })


// usermodel.update({ password: 'new pass'},
// 	 			 { where : { username: 'manish'}}
// 	 			 )
// .then(function(result){
// console.log(result);
// })
// .catch(function(err){
// 	console.log(err);
// })

// usermodel.destroy(
// 	{ where : {username: 'ram'}}
// )
// .then(function(result){

// })
// .catch(function(result){

// })







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