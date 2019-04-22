Sequelize = require('sequelize');

var sequelize = new Sequelize(
	'softwaricahotel', 'root', '' ,{
		host:'localhost',
		dialect : 'mysql'
	}
)

sequelize.authenticate().
then(function(){
	console.log('sdfsd')
})
.catch(function(err){
console.log(err);
})

module.exports = {

	Sequelize,
	sequelize
}