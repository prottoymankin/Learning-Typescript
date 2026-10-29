// Tells TypeScript to treat a value as a specific type without changing its actual type at runtime.
// “I know the type of this value, so you don't need to worry about it. Just treat it as the type I assert and chill.”

// syntax
// preffered syntax
const element_1 = document.getElementById("canvas") as HTMLCanvasElement;

// alternative syntax
const element_2 = <HTMLCanvasElement>document.getElementById("canvas")

/*
Another good example is when fetching data from an API.

Assume TypeScript doesn't know the exact type or schema of the data returned by the API call.

But I know what type of data the API is expected to return. So, I can use Type Assertion here.

I assert a type and tell TypeScript, "Don't worry about the type of this value. I know what type it should be. Treat it as the type I'm asserting and just follow it."

However, Type Assertion doesn't verify whether the actual API response matches the asserted type.
*/

interface User {
  id: number;
  username: string;
};

const getUsers = async () => {
  const response = await fetch("/api/users");
  const rawData = await response.json();

  // Without "as User", TypeScript treats the parsed JSON data as any,
  // so it doesn't provide type safety or autocomplete based on the User interface.
  const user = rawData as User;

  console.log(user.id);
  console.log(user.username);
}

// Const Assertion
// Uses a const assertion to preserve literal types and make object properties and array elements readonly at the TypeScript level.

const colors = ['red', 'green', 'blue'] as const;

// ❌ Error: Cannot assign to a readonly element
// colors[0] = 'yellow'

const person = {
  name: 'John Doe',
  age: 25,
  isMarried: false
} as const;

// ❌ Error: Cannot assign to 'name' because it is a read-only property.
// person.name = 'Hordy Jones'

// Satisfies
type AUser = {
  id: string | number;
  name: string
};

// Using type annotation makes user_1.id a string | number,
// so calling toFixed() directly causes a compile-time error.
const user_1: AUser = {
  id: 101,
  name: "King Naptune"
};

// ❌ Error
// user_1.id.toFixed()

// Using satisfies checks whether the object meets AUser's requirements
// while preserving its inferred type, so user_2.id is a number.
const user_2 = {
  id: 102,
  name: 'Jimbe'
} satisfies AUser;

// ✅ Works
user_2.id.toFixed()