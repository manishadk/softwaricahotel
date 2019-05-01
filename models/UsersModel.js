var mysequelize = require('../Configs/dbconfigs')
const myUsers = mysequelize.sequelize.define('myUsers',
{
	id: {
		type: mysequelize.Sequelize.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull : false
	},

		username: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

		password: {
		type: mysequelize.Sequelize.STRING,
		allowNull : false
	},

	userphoto : {
		type : mysequelize.Sequelize.STRING,
		allowNull: false
	},

	address : {
		type: mysequelize.Sequelize.STRING(50),
		allowNull:false
	}

},
{
	freezeTableName:true,
	tableName:'hotel_users'
}

)

myUsers.sync({force:false})
.then(function(){
// console.log('users table created')
})
.catch(function(err){
	// console.log(err)
	// console.log('err creating table')
})


module.exports = myUsers;