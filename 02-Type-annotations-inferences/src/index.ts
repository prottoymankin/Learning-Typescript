// Inferred Types 

// const name = "John"; 
// const age = 30; 
// const isAdmin = false;
// const scores = [10, 20, 30];
// const user = {
//     name: "John",
//     age: 30,
//     isAdmin: false
// };

//Type annotation
const name: string = "John";
const age: number = 30;
const isAdmin: boolean = false;
const scores: number[] = [10, 20, 30];
const user: { name: string, age: number, isAdmin: boolean} = {
  name: "John",
  age: 30,
  isAdmin: false
};

function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}

//* This happens because of contextual typing. TypeScript knows that names is a string[], so it automatically knows that the name parameter inside forEach() is a string. Therefore, we don't need to explicitly specify the type of name.
const names = ["John", "Jane", "Alex"];
names.forEach(name => {
    console.log(name.toUpperCase());
});