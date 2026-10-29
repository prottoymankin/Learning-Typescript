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

// Task 03
type AppConfig = {
  appName: string;
  version: string;
  port: number;
  debug: boolean;
};

// The first object satisfies all the requirements of AppConfig, so there is no error.
const config = {
  appName: 'Movie Explorer',
  version: '1.0.0',
  port: 3000,
  debug: true
} satisfies AppConfig;

// The second object includes a theme property, which is not defined in AppConfig. Therefore, TypeScript reports an error.

// const configWithError = {
//   appName: 'Movie Explorer',
//   version: '1.0.0',
//   port: 3000,
//   debug: true,
//   theme: 'light'
// } satisfies AppConfig;

// Task 04
type User = {
  id: number;
  username: string;
};

// `value is User` is a Type Predicate.
// It tells TypeScript that if `isUser()` returns true,
// the value can be treated as the User type.

const isUser = (value: unknown): value is User => {
  return (
    typeof data === 'object' &&
    data !== null &&
    "id" in data &&
    typeof data.id === 'number' &&
    "name" in data &&
    typeof data.name === 'string'
  );
};

const data: unknown = JSON.parse(
  '{ "id": 101, "username": "John Doe" }'
);

if (isUser(data)) {
  console.log(data.id);
  console.log(data.username);
}