$(document).ready(function(){

$('#regisform').submit(function(e)
{
e.preventDefault();


// console.log($('#userphoto')[0].files[0]);
var mydata = {
// key     value 
username : $('#username').val(),
address: $('#address').val(),
password: $('#password').val(),
userphoto : $('#userphoto')[0].files[0]

}

console.log(mydata['username'])

var formdata = new FormData();

			// object
for (key in mydata){
	console.log(key)
	console.log(mydata[key])

}
for (key in mydata){
	formdata.append(key,  mydata[key]);

}


// $.ajax({

// url : 'http://localhost:3000/admin/registration',
// method:'POST',
// contentType : false,
// processData : false,
// data : formdata,
// dataType : 'json',

// success : function(result,status) {


// },

// error : function(jqXHR,status){

// }


// })






















// var regisdetails = {
// 	username: $('#username').val(),
// 	password: $('#password').val(),
// 	address: $('#address').val(),
// userphoto : $('#userphoto')[0].files[0]

// }
// var rdata = new FormData();
// for(key in regisdetails) {
// 	rdata.append(key, regisdetails[key])
// }



$.ajax({
url : 'http://localhost:3000/admin/registration',
method: 'POST',
contentType: false,
processData: false,
dataType: 'json',
data : formdata,

success: function(result,status,jqXHR){
	console.log(result)
	console.log(status)

// window.location = 'http://localhost:3000/'
},
error: function (jqXHR,status){

console.log(status);

}


})

})

})










// $.ajax({

// url : 'http://localhost:3000/admin/registration',
// method: 'POST',
// contentType: 'application/json',
// dataType: 'json',
// data : JSON.stringify(regisdetails),
// success: function(){
// window.location = 'http://localhost:3000/'
// },
// error: function (){


// }


// })


// // console.log(username);
// // $.ajax({

	
// // })


// })




// })
