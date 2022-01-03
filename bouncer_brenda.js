// I have chosen that there can be a maximum of 250 people inside of the club.
const maxPeople = 250;

const bouncerBrendaPeople = function(_maxPeople, currentPeople){
    if(currentPeople < 250){
        return "come in";
    } else {
        return "it's too busy now, come back later"
    }
};

const bouncerBrendaAge = function(agePerson){
    if(agePerson >= 21){
        return "come in"
    } else{
        return "sorry, this club is for adults"
    }
};

console.log(bouncerBrendaAge(12)); // Logging this gives "sorry, this club is for adults"
console.log(bouncerBrendaPeople(250, 249)); // Logging this gives "come in"

console.log(bouncerBrendaAge(21)); // Logging this gives "come in"
console.log(bouncerBrendaPeople(250, 250)); // Logging this gives "its' too busy now, come back later"

console.log(bouncerBrendaAge(18)); // Logging this gives "sorry, this club is for adults"
console.log(bouncerBrendaPeople(250, 250)); // Logging this gives "its' too busy now, come back later"

// This function is a function that does something: It checks if a certain person can enter or not.
// You can also change the code by leaving the 'else' out. Whenever the if statement isn't met, the function will automatically return 'undefined'.
