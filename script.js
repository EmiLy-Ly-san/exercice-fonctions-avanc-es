// Given an array of names of people but mixing lower case and upper case letters, you will have to:
// - Create a function that contains the logic to refactor those names so it converts a name like `anTHoNY` to `Anthony`.
// - A function that accepts two parameters: an array and a callback function that is in charge of refactoring all items inside that array
// - Return the original array but with all names properly typed

const people = [
  "JoHn",
  "ChrISTiana",
  "anThoNY",
  "MARia",
  "jaMeS",
  "MIChaEl",
  "jeNNIFeR",
];

function refactoName(string) {
  const lowerCaseName = string.toLowerCase();
  const capitalizeName =
    lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1);
  return capitalizeName;
}

function refactoPeople(array, callback) {
  array = array.map((name) => callback(name));
  return array;
}

console.log(refactoPeople(people, refactoName));
