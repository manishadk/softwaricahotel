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

	testval : {
		type: mysequelize.Sequelize.STRING(50),
		allowNull:false
	}

},

{
	freezeTableName : true,
	tableName: 'hotel_users'
}

)

myUsers.sync({force:false})
.then(function(){
console.log('users table created')
})
.catch(function(){
	console.log('err creating table')
})
// myUsers.findOne({
// 	where: { username : 'test'},
// 	attributes: ['id', 'password']
// })
// .then(function(user){
// 	console.log(user.dataValues);
// })
// .catch(function(err){

// })

// module.exports = myUsers;