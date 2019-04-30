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
// console.log(result);
})
.catch(function(err){
})
}

function userAuth(req,res){
	console.log( req.body.username)

	usermodel.findOne({
	where: { username : 'manish'},
	attributes: ['id', 'password']
})
.then(function(user){
	console.log(user);
})
.catch(function(err){

})

	// usermodel.findOne({
	// 	where : { username : 'manish'}
	// })
	// .then(function(result){

	// 	console.log(result)
	// 	console.log('sdasdasd')
	// 	// if(){
	// 	// 	res.send({status:200})

	// 	// }
	// 	// else {
	// 	// 	res.send({status:401})
	// 	// }

	// })
	// .catch(function(err){
	// 	console.log(err)

	// })
}

module.exports= {
userRegister,
userAuth
}