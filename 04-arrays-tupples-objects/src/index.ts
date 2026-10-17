const names: string[] = ["Alice", "Bob", "John"];
const scores: number[] = [10, 20, 30];
const flags: boolean[] = [false, true];

names.push("Alex");

//! Error: Cannot push a number into a string array.
// names.push(123);

const allNames: Array<string> = ["Alex", "Peter", "John"];
const allScores: Array<number> = [100, 99, 95];

//* It's better to specify the type when initializing an empty array.
const fruits: string[] = [];

// readonly
const printNames = (names: readonly string[]) => {
  console.log(names.join(", "));
};

const mixedArray: (string | number | boolean)[] = ["Alice", 24, true, 20, "hello"];
mixedArray.push("John"); // Allowed ✅
mixedArray.push(40); // Allowed ✅
mixedArray.push(true); // Allowed ✅

//! Not Allowed ❌. Because the array is only contains string, number and boolean types values.
// mixedArray.push(new Date());

//? Object
type User = {
  id: number;
  name: string;
  active: boolean
};

//* All fields are required otherwise it'll show error
const user_1: User = {
  id: 1,
  name: "Harray potter",
  active: true
};

const getMyUser = (user: User) => {
  console.log(user.name);
};

//? Optional Object Properties
type Employee = {
  readonly id: number,
  name: string,
  nickname?: string
};

const employee_1: Employee = {
  id: 1,
  name: "John Doe"
};

const employee_2: Employee = {
  id: 2,
  name: "Donuld Trump",
  nickname: "DT"
};

//* No error because here we are just reading the value not updating.
console.log(employee_1.id); 

//! It is not allowed it will cause an error because it is a read-only property so we cannot update the id property.
// employee_1.id = 5

//? Nested object types
type Address = {
  city: string;
  country: string;
};

type Artist = {
  name: string;
  address: Address;
};

const address_1: Address = {
  city: "Dhaka",
  country: "Bangladesh"
};

const artist_1: Artist = {
  name: "Kabir",
  address: address_1
}

//? Array & Object together
type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 100000 },
  { id: 2, name: "Keyboard", price: 5000 }
];

//? Structural Type
type Patient = {
  name: string;
  age: number;
};

const person = {
  name: "John Doe",
  age: 22,
  city: "Dhaka"
};

//* Valid because TypeScript uses structural typing and person contains all the required properties of User with matching types.
const patient: Patient = person;

//? Tuple
const address: [string, number] = ["Sylhet", 12345];
const userEntry: [string, number] = ["John", 24];

const someName = userEntry[0];
const someAge = userEntry[1];

type coordinate = [number, number, number?];

const point2D: coordinate = [10, 20];
const point3D: coordinate = [10, 20, 30];

//! Not allowd because 3 items are allowed.
// const point4D: coordinate = [10, 20, 30, 40];