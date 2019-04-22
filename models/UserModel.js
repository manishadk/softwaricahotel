var mysequelize = require('./Configs/dbconfigs');

var myusers = mysequelize.sequelize.define('myusers', {

id : {
type: mysequelize.Sequelize.BIGINT(10),
primaryKey : true,
allowNull: false
},

 firstName: {
    type: mysequelize.Sequelize.STRING,
    allowNull: false
  }

},

{

	freezeTableName: true,
	tableName : 'my_users'

}
)

myusers.sync({force:true})
.then(function(){

})
.catch(function (err){

})
