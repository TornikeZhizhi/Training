// Function constructor

document.body.style.background = "#232323"



/*



// var john = {

// 	name: "john",
// 	yearOfBirthsadasda: 1990,
// 	job: "teacher"
// };



var Person = function(name,yearOfBirth,job){

	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	// this.calculateAge = function(){
	// 	console.log(2016 -this.yearOfBirth)
	// }
}

// Person.prototype.lastName = "smith";


Person.prototype.calculateAge = function(){

	console.log(2016 -  this.yearOfBirth)
}



var john = new Person("john",1990,"teacher")
john.calculateAge();


var jane = new Person("jane",1969,"pupil");
jane.calculateAge()

var mark = new Person("mark",1948,"retired");
mark.calculateAge()



*/




// Object.Create



/*
var personProto = {

	calculateAge: function(){
		console.log(2016 - this.yearOfBirth);
	}

}


var john = Object.create(personProto);
john.name = "john";
john.yearOfBirth = 1990;
john.job = "teacher";



var jane  = Object.create(personProto,{

	name: {value: "jane"},
	yearOfBirth: {value: 1969},
	job: {value:"designer"}

})


*/


