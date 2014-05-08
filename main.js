var house = {
	 walls: 4,
	 windows: 12,
	 doors: 2,
	 roof: 1
}

console.log(house);

console.log(house.windows)

var steak = {
	meat: "filet mignon",
	grill: "Weber",
	seasoning: "salt",
	tools: "steak knife"
}

console.log(steak.tools)

steak.sauce="A1"

console.log (steak)

var Nina = new Object();

Nina.living = true;
Nina.age = 27;
Nina.gender = "female";

console.log(Nina);

// Nina is the name of the variable and is an object.
// Living, age and gender are properties of the object,
// and true, 27 and female are the values of those properties. 
// var house = {}, and var Nina = new Object, are doing the 
// same thing. Creating a new object.

Nina.getgender = function() {return Nina.gender;};

console.log(Nina.getgender());

console.log(Nina);

// Nina.getgender = ... creates a new property in the Nina object.
// This property is a function object with the purpose of operating
// on the Nina object.

var car = {
	engine: 1,
	seats: 4,
	steeringWheel: 1,
	brakes: 4,
}

console.log(car);

console.log(car.seats);

car.gloveBox= 1;

console.log(car);

car.checkEngine = function() {return car.engine;};

console.log(car.checkEngine());

function addNames(a,b) {
	return a+b;
} 

console.log(addNames);

addNames("luke", "Andrew");

console.log(addNames("luke", "Andrew"));

// The above was just trying to practice syntax a little.

var person = {
	firstName: "David",
	middleName: "Allen",
	lastName: "Coe"
}

console.log(person.firstName);

person.createInitials = function() {
	return this.firstName[0] + this.middleName[0] + this.lastName[0]
}


console.log(person.createInitials());

var arrayHere = [1,2,3,4,5]

console.log(arrayHere);

arrayHere = ["tim", "jim", "dan"]

console.log(arrayHere);

console.log(arrayHere.length);

console.log(arrayHere.join(""));

console.log("dollar");

console.log("dollar"[4]);

console.log("dollar"["l"]); 
// I thougth that would isolate the "l's". Didn't work.
// Maybe you can only get the numaric value from
// a string in an array.

// I feel pretty lost on how and why these things work
// together. 

