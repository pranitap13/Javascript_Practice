//arrow function

/*const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) =>
{
    const age = 2024 - birthYear;
    const retirement = 60 - age;

    return  firstName + " retires in " + retirement + " years";
}

console.log(yearsUntilRetirement(2003, 'Pranita'));
console.log(yearsUntilRetirement(2005, 'Pranav'));*/

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apple,orange){
    const applePieces = cutFruitPieces(apple);
    const orangePieces = cutFruitPieces(orange);

    return "The pieces of Apple are: " + applePieces + " and Orange pieces are: " + orangePieces ; 
}

console.log(fruitProcessor(2,3));