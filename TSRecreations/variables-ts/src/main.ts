// Lets work with Variables!

// Create a variable for the number of cups of coffee you drank today.
const numberCupsOfCoffee: number = 2;

// Create a variable for your fullName.
const myFullName: string = "Jordan Bryan";

// Console log out our new variables -- I used string interpolation `${}`.
console.log(
  `Hello my name is ${myFullName} and I have drank ${numberCupsOfCoffee} cups of coffee`
);

// When creating a new object in Typescript we need to define an interface
interface Person {
  fullName: string;
  luckyNumber: number;
  favoriteMovies: string[];
}

// Initialize a new object following the types of the interface.
const newPerson: Person = {
  fullName: "John Doe",
  luckyNumber: 13,
  favoriteMovies: ["Star Wars", "The Avengers", "Citizen Kane"],
};

// Create a variable to hold the users name if the user doesn't enter it then the value could be null.
const userName: string | null = window.prompt("Hello what is your name?");

// Greet the user
console.log(`Welcome: ${userName}`);

const firstOperand: string | null = window.prompt("Choose a number:");
const secondOperand: string | null = window.prompt("Choose a number:");

// Set a variable for each of the mathematical operations
const sum: number = Number(firstOperand) + Number(secondOperand);
const difference: number = Number(firstOperand) - Number(secondOperand);
const product: number = Number(firstOperand) * Number(secondOperand);
const quotient: number = Number(firstOperand) / Number(secondOperand);
const remainder: number = Number(firstOperand) % Number(secondOperand);

// Console log out each of the operations
console.log(`${firstOperand} + ${secondOperand} = ${remainder}`);
console.log(`${firstOperand} - ${secondOperand} = ${quotient}`);
console.log(`${firstOperand} * ${secondOperand} = ${product}`);
console.log(`${firstOperand} / ${secondOperand} = ${difference}`);
console.log(`${firstOperand} % ${secondOperand} = ${remainder}`);

// Import the random number array into the main.ts file.
const numbers: number[] = [
  22, 96, 5, 11, 62, 18, 50, 32, 29, 13, 22, 14, 18, 19, 2, 29, 72, 47, 51, 61,
  51, 48, 79, 67, 52, 66, 43, 41, 53, 24, 80, 11, 30, 30, 85, 11, 88, 20, 95,
  72, 66, 95, 99, 65, 75, 32, 81, 33, 51, 85, 76, 67, 1, 50, 82, 1, 3, 74, 19,
  87, 38, 64, 62, 11, 39, 69, 39, 36, 83, 73, 89, 73, 69, 76, 66, 79, 71, 23,
  84, 55, 84, 79, 73, 26, 8, 39, 86, 6, 31, 80, 49, 65, 73, 85, 64, 66, 6, 33,
  13, 88,
];

// When creating a new object in Typescript we need to define an interface
interface statistics {
  smallest: number;
  largest: number;
  sum: number;
  sumOfOdd: number;
  sumOfEven: number;
  average: number;
}

// Initialize a new object following the types of the interface.
const currentStats: statistics = {
  smallest: numbers[0],
  largest: numbers[0],
  sum: numbers[0],
  sumOfOdd: 0,
  sumOfEven: 0,
  average: numbers[0],
};

// For the length of the numbers array and check for largest, smallest, and generate a sum, and average.
for (let index = 0; index < numbers.length; index++) {
  // If the numbers array at the current index is smaller than the currentStats.smallest set a new smallest.
  if (numbers[index] < currentStats.smallest) {
    currentStats.smallest = numbers[index];
  }
  // If the numbers array at the current index is smaller than the currentStats.largest set a new largest.
  if (numbers[index] > currentStats.largest) {
    currentStats.largest = numbers[index];
  }
  if (numbers[index] % 2 === 0) {
    currentStats.sumOfEven += numbers[index];
  } else {
    currentStats.sumOfOdd += numbers[index];
  }
  // Calculate the sum by adding each number in the array together
  currentStats.sum += numbers[index];
}
// Calculate the average by dividing the sum by the length of the array
currentStats.average = currentStats.sum / numbers.length;

// Console log out the currentStats object.
console.log(currentStats);
