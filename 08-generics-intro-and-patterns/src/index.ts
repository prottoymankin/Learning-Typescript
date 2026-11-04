//* Generics হলো এমন একটি system, 
//* যার মাধ্যমে আমরা reusable code তৈরি করতে পারি 
//* এবং একই সঙ্গে Type Safety বজায় রাখতে পারি

//* এখানে T হলো Generic Type Parameter
//* T কোনো নির্দিষ্ট TypeScript keyword নয়
//* এটি একটি সাধারণ নাম। চাইলে T, Type, Value যেকোনো নাম দিতে পারি
const getFirstItem = <T>(arr: T[]): T => {
  return arr[0];
};

console.log(getFirstItem([10, 20, 30, 40, 50]));
console.log(getFirstItem(['a', 'b', 'c', 'd', 'e']));

//* Generic interface ব্যবহার করে API response-এর common structure define করা
//* DataShape হলো Generic Type Parameter, যা data-এর actual type নির্ধারণ করবে
//* DataShape-এর জায়গায় User, Product, Ticket বা অন্য যেকোনো type ব্যবহার করা যাবে 
//* এতে নির্দিষ্ট data type অনুযায়ী Type Safety বজায় থাকবে।
interface ApiResponse <DataShape> {
  data: DataShape;
  success: boolean;
  message: string;
};

//* User data-এর structure define করা
interface User {
  id: number;
  name: string;
  isActive: boolean;
};

//* Product data-এর structure define করা
interface Product {
  id: number;
  name: string;
  stock: number;
};

//* ApiResponse-এর Generic Type হিসেবে User পাঠানো
//* ফলে response-এর data property-এর type হবে User
const userResponse: ApiResponse<User> = {
  success: true,
  message: "User data fetched successfully.",
  data: {
    id: 101,
    name: 'Alice',
    isActive: true
  }
};

//* ApiResponse-এর Generic Type হিসেবে Product পাঠানো
//* ফলে response-এর data property-এর type হবে Product
const productResponse: ApiResponse<Product> = {
  success: true,
  message: "Product data fetched successfully.",
  data: {
    id: 101,
    name: "Gaming Keyboard",
    stock: 10
  }
};


interface HasLength {
  length: number;
};

//* T যেকোনো type হতে পারে
//* তবে সেই type-এর মধ্যে length: number থাকতে হবে
//* তাই item.length access করা নিরাপদ
//* // Generic Constraint ব্যবহার করে নিশ্চিত করা হচ্ছে যে T type-এর মধ্যে HasLength-এর structure থাকতে হবে
const logLength = <T extends HasLength>(item: T): void => {
  console.log(`Length is: ${item.length}`);
};

//* String-এর length property থাকায় এটি কাজ করবে
logLength('typescript');

//* Array-এর length property থাকায় এটিও কাজ করবে
logLength([1,2,3]);