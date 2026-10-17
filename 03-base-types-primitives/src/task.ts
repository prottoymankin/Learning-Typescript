//* Task 01 ✅
const username = "tapas"; //* string 
const age = 35; //* number 
const verified = true; //* boolean 
const accountId = 12345678901234567890n; //* bigint 
const token = Symbol("token"); //* symbol 

//?* Task 02 ✅
type User = {
  id: number;
  name: string;
  isActive: boolean;
  email: string | null;
  lastLogin: Date | undefined;
}


//* Task 03 ✅
const printValue = (value: unknown) => {

  if (typeof value === "string") {
    console.log(value);
  } else if (typeof value === "number") {
    console.log(value);
  }
  
};

//* Task 04 ✅
const throwError = (message: string): never => {
  throw new Error (message);
};

//* Task 05 ✅
//! Problem 01 (Using String instead of string): The 'String' type represents the built-in wrapper object, whereas 'string' represents the primitive string type. We should use lowercase 'string' for type annotations in TypeScript.

//! Problem 02 (Using Number instead of number): Similarilly, we should use lowercase 'number' instead of 'Number' because 'number' represents the primitive number type.

//! Problem 03 (Using any for the data parameter): Since data has the any type, TypeScript does not check whether the user property exists. If data is null or undefined, accessing data.user will cause a runtime error.

//! Problem 04 (Accessing data.user without checking): Since data has the any type, TypeScript does not check whether the user property exists. If data is null or undefined, accessing data.user will cause a runtime error.

//* If the structure of data is genuinely unknown, using unknown is safer than using any. We must validate the data before accessing its properties.

const processUser = (
  name: string,
  age: number,
  data: unknown
) => {

  if (typeof data === "object" && data !== null && "user" in data) {
    return data.user;
  }

  return undefined;

};

/*
? Why is unknown better than any?

The unknown type accepts a value of any type, but it requires us to perform type checking before accessing properties or performing operations on the value. Using type guards helps maintain type safety and prevents errors caused by invalid operations at runtime.
*/

//* Bonus Challenge ✅
const formatValue = (value: unknown) => {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "number") {
    return value;
  } else if (typeof value === "boolean") {
    return value;
  } else {
    return undefined;
  }
};