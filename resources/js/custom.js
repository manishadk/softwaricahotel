$(document).ready(function(){

$('#loginform').submit(function(e){

	e.preventDefault()

	var logindata =
{


	 username: $('#username').val(),
	 password: $('#password').val()
}

console.log(logindata);

$.ajax({

url:'http://localhost:3000/admin/login',
method: 'POST',
contentType : 'application/json',
data:JSON.stringify(logindata),
dataType:'json',
success: function(result){
console.log('in success')
},

error: function(jqXHR,status){
console.log('in err')
}
})




})

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
// console.log(result)

// },

// error : function(jqXHR,status){

// console.log(status)
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
	if(result.status == 200){

// window.location = 'http://localhost:3000/admin/login'
	}

},
error: function (jqXHR,status){
console.log(jqXHR);
console.log(status);

}


})

})

})


