const numberCheck = function(number){
    if(number > 100){
        return true;
    } else{
        return false;
    }
};

console.log(numberCheck(99)); // Logging gives 'false'
console.log(numberCheck(100)); // Logging gives 'false'
console.log(numberCheck(101)); // Logging gives 'true'

// This function falls into the category of 'functions that produce something'.
