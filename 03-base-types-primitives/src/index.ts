let name: string = "John Doe";
let age: number = 24;
let isLoggedIn: boolean = false;

// string
let firstName: string = "John";
let message: string = 'hello';
let greeting: string = `Good morning`;

// number
let count: number = 10;
let price: number = 999.99;
let temperature: number = -5;
let score: number = 95.5

//boolean
let isAdmin: boolean = true;
let hasPermission: boolean = false;

// string & String
let person: String = new String("Peter");

// null & undefined
let result: null = null;
let value: undefined = undefined;

let username: string | null = "Alice";
username = null;

const getSavedUser = (): string | null => {
  return Math.random() > 0.5 ? "Alice" : null;
};

let username_1: string | null = getSavedUser(); //* It can return a string or null. 

//* Since the `getSavedUser()` function can return either a string or `null`, we cannot directly call string methods on `username_1`. If `username_1` is `null`, the code will crash at runtime.
// username_1.toLowerCase()

//* We can solve this problem using optional chaining
username_1?.toUpperCase();

const users = ["A", "B"];
const user: string | undefined = users.find(name => name === "C");

// bigint
const hugeNumber: bigint = 900000102393445654n;

// symbol
let id_1 = Symbol("id");
let id_2 = Symbol("id");

console.log(id_1 === id_2) // false;

//Special types: unknown, any, never, void

//* any: The `any` type tells TypeScript to disable type checking for that value, allowing us to perform operations without type-checking errors. However, invalid operations can still cause runtime errors.

let someValue: any = "Hello";
someValue.toUpperCase();
someValue.toFixed();

//? unknown -> Accepts a value of any type, but requires type checking before performing operations on it.
let someValue_1: unknown = "hello";

//* Error because TypeScript cannot guarantee that "someValue_1" is a string. We must check its type before calling string methods on it.
// someValue_1.toUpperCase();

if (typeof someValue_1 === "string") {
  someValue_1.toUpperCase();
}

//? void -> `void` is generally used with functions. When a function does not return a meaningful value, we can set its return type to `void`.
const greet = (name: string): void => {
  console.log(`Good morning, ${name}`);
};

//? never -> "never" is used for functions that never complete normally, such as functions that always throw an error or run an infinite loop.

const keepAlive = (): never => {
  while (true) {
    // infinite loop
  }
};

const throwError = (errorMessage: string): never => {
  throw new Error(errorMessage);
};