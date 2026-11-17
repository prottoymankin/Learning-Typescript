interface User {
  id: number;
  name: string;
  email: string;
};

//* TypeScript-এর keyof দিয়ে কোনো interface বা type-এর সব property key-কে Union Type-এ convert করা যায়।
//* keyof → Object-এর keys-গুলোকে Union Type বানায়।
type UserKeys = keyof User; // * "id" | "name" | "email"

//* T হলো function-এ pass করা object-এর type।
//* K extends keyof T নিশ্চিত করে যে K শুধু T-এর valid property key গ্রহণ করতে পারবে।
const getProperty = <T, K extends keyof T> (obj: T, key: K): T[K] => {
  return obj[key];
}

const student = {
  id: 101,
  name: "Alice",
  email: "alice@official.com"
};

getProperty(student, "name");

//* T: আমি যেহেতু function-এ student object pass করছি,
//* তাই T student object-এর type infer করবে।

//* K: শুধু student object-এর valid property keys
//* ("id" | "name" | "email") accept করবে।

//* যেহেতু student object-এর মধ্যে "age" নামে কোনো property নেই,
//* তাই K "age" accept করবে না এবং compile-time error দিবে।
// getProperty(student, "age");