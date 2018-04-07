let age = document.getElementById('age');

function user (surname, name) {
	this.surname = surname;
	this.name = name;
	this.value = age.value;
	this.showUser = function  () {
    alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
	}
}


let iven = new user("sokolov", "iven");

iven.showUser();