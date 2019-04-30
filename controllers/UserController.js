
var usermodel = require('../models/UsersModel');

//insert 
function regsiterUser(req,res,next){

usermodel.create({
username : req.body.username,
password: req.body.password,
userphoto: req.file.originalname,
address:req.body.address
})
.then(function(result){
console.log(result.get({plain:true}))
next();
})
.catch(function(err){
})

}


module.exports = {regsiterUser};

//get

// usermodel.findOne({
// 	where:{username:'test1' },
// 	attributes: ['id','username']
// }).
// then(function(result){
// 	console.log(result.dataValues);
// })

// usermodel.findAll({
// 	where : {username:'test1'}
// }).
// then(function(result){
// 	console.log(result[0].dataValues)
// })
