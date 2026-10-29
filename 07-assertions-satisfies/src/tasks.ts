// Task 01
const inputElem = document.getElementById('email-input') as HTMLInputElement;
console.log(inputElem.value);

const elem = document.getElementById('div');

if (elem instanceof HTMLInputElement) {
  console.log(elem.value);
} else {
  console.log("The element is not an input element.");
}

// Task 02
const num = '42';

// string and number are different types, so TypeScript does not allow a direct type assertion from string to number because they have insufficient type overlap.
// ❌ Error
// const newNum = num as number

// correct runtime conversion
const newNum = Number(num);