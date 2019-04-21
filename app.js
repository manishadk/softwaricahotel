var express = require('express');
var myapp = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
myapp.use(bodyParser.urlencoded({extended:true}))
myapp.use(bodyParser.json());
myapp.use(express.static(
	path.join(__dirname, 'resources')
	));
myapp.set('views', __dirname+'/views');
myapp.set('view engine', 'ejs');

// var upload = multer( 
// { dest : 'resources/uploads'
// }
// )

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