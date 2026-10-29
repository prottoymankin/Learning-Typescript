// Task 01
const inputElem = document.getElementById('email-input') as HTMLInputElement;
console.log(inputElem.value);

const elem = document.getElementById('div');

if (elem instanceof HTMLInputElement) {
  console.log(elem.value);
} else {
  console.log("The element is not an input element.");
}