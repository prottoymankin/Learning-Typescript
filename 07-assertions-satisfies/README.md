### Select a DOM input using a type assertion, then implement a safer version using instanceof.

```ts
const inputElem = document.getElementById('email-input') as HTMLInputElement;
console.log(inputElem.value);

const elem = document.getElementById('div');

if (elem instanceof HTMLInputElement) {
  console.log(elem.value);
} else {
  console.log("The element is not an input element.");
}
```

### Demonstrate why "42" as number does not convert a string. Then perform the correct runtime conversion.

```ts
const num = '42';
```
- string and number are different types, so TypeScript does not allow a direct type assertion from string to number because they have insufficient type overlap.

```ts
// Cause error
const newNum = num as number
```

```ts
// correct runtime conversion
const newNum = Number(num);
```

### Create an application configuration type and an object using satisfies. Add an incorrect property and observe the error.

```ts
type AppConfig = {
  appName: string;
  version: string;
  port: number;
  debug: boolean;
};
```

`This object satisfies all the requirements of AppConfig, so there is no error.`

```ts
const config = {
  appName: 'Movie Explorer',
  version: '1.0.0',
  port: 3000,
  debug: true
} satisfies AppConfig;
```

`This object includes a theme property, which is not defined in AppConfig. Therefore, TypeScript reports an error.`

```ts
const configWithError = {
  appName: 'Movie Explorer',
  version: '1.0.0',
  port: 3000,
  debug: true,
  theme: 'light'
} satisfies AppConfig;
```

### Treat parsed JSON as unknown and safely narrow it to a User type.

```ts
type User = {
  id: number;
  username: string;
};

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
```

- `value is User` is a Type Predicate.
- It tells TypeScript that if `isUser()` returns true,
- the value can be treated as the User type.