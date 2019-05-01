var usermodel = require('../models/UsersModel')

function userRegister(req,res,next){

usermodel.create({
	username:req.body.username,
	password:req.body.password,
	userphoto:'file.originalname',
	address:req.body.address
})
.then(function(result){
	next();
})
.catch(function(err){

})
}

function userAuth(req,res){
	console.log( req.body.username)
	usermodel.findOne({
		where: {username : req.body.username}
	})
	.then(function(result){
		console.log('in then')
		console.log(result.dataValues);
	})
	.catch(function(err){
		console.log(err);
	})
}

function listHotels(req,res){
	usermodel.findAll()
	.then(function(result){

	})
	.catch(function(err){

	})
}

function updateHotels(req,res){
usermodel.update({
	'title':req.body.title
	'location':req.body.location
})
}

module.exports= {
userRegister,
userAuth
}