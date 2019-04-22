var Sequelize = require('sequelize')

var sequelize = new Sequelize('softwaricahotel','root', '', {
	host : 'localhost',
	dialect: 'mysql'
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
console.log('I am here');
// module.exports = sequelize;
module.exports = {
sequelize,
Sequelize

}