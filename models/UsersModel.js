var mysequelize = require('../Configs/dbconfig')
console.log(mysequelize.sequelize)
var users=mysequelize.sequelize.define('users',
{
	id: {
		
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true 
	}
},

{
	freezeTableName : true,
	tableName: 'hotel_users'
}


)

users.sync({force:true})
.then(function(){
console.log('table created')
})
.catch(function(){
	console.log('err creating table')
})