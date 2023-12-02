// PART 1
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers));
// ----------------------------------------
function averageArray(numbers) {
    const sum = sumArray(numbers);
    return sum / numbers.length;
}

console.log(averageArray(numbers));
// ---------------------------------------
function longestString(strings) {
    return strings.reduce((longest, current) => (current.length > longest.length ? current : longest), "");
}

const stringArray = ["apple", "banana", "orange", "kiwi"];
console.log(longestString(stringArray)); 
// ------------------------------------------------
function filterStringsByLength(strings, minLength) {
    return strings.filter(str => str.length > minLength);
}

const minLength = 5;
console.log(filterStringsByLength(stringArray, minLength)); 
// Part 2 
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
  ];

  const sortedArray = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));

  const filteredArray = sortedArray.filter(entry => parseInt(entry.age) <= 50);
  
  
  const mappedArray = filteredArray.map(entry => ({
    id: entry.id,
    name: entry.name,
    job: entry.occupation,
    age: parseInt(entry.age) + 1
  }));

  const sumOfAges = mappedArray.reduce((acc, entry) => acc + entry.age, 0);
  

  const averageAge = sumOfAges / mappedArray.length;
  
  console.log("Sorted Array:", sortedArray);
  console.log("Filtered Array:", filteredArray);
  console.log("Mapped Array:", mappedArray);
  console.log("Sum of Ages:", sumOfAges);
  console.log("Average Age:", averageAge);
//   Part 3 

const incrementAge = (person) => {

    const personCopy = { ...person };

    personCopy.age = parseInt(personCopy.age) + 1;

    return personCopy;
  };

  const personObject = { id: "42", name: "Bruce", occupation: "Knight", age: "41" };
  
  const incrementedOriginal = incrementAge(personObject);
  
  console.log("Original Object:", personObject);
  console.log("Incremented Original Object:", incrementedOriginal);

  