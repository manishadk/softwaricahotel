var Sequelize = require('sequelize')

var sequelize = new Sequelize('softwaricahotel','root', '', {
	host : 'localhost',
	dialect: 'mysql',
	 logging: false

});

sequelize.authenticate()
.then(

	function (){
console.log('db successfully connected');
}

)
.catch(function(err)
{

}
)
// module.exports = sequelize;
module.exports = {
sequelize,
Sequelize

}