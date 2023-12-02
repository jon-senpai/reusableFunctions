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
