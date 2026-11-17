//* Type Mapping মানে হলো existing কোনো Type-এর properties map করে নতুন একটি Type তৈরি করা।

interface ApiUser {
  readonly id: number;
  name?: string;
  email?: string;
};

//* keyof T → ApiUser-এর সব property key বের করছে।
//* [K in keyof T] → প্রতিটি property key-এর উপর loop চালাচ্ছে।
//* -readonly → property থেকে readonly modifier remove করছে।
//* -? → property থেকে optional (?) modifier remove করছে।
//* T[K] → প্রতিটি property-এর original value type ধরে রাখছে।

type EditableUser <T> = {
  -readonly[K in keyof T]-?: T[K];
}

type UserForm = EditableUser<ApiUser>;

interface Product {
  readonly id: number;
  name?: string;
  price?: number;
  category: string;
}

//* T: Generic type হিসেবে Product interface-এর type গ্রহণ করবে।
//* keyof T: T-এর সব property key-এর Union Type তৈরি করবে।
//* [K in keyof T]: T-এর প্রতিটি property key-এর উপর loop চালাবে।
//* +readonly: প্রতিটি property-তে readonly modifier add করবে।
//* -?: প্রতিটি property থেকে optional (?) modifier remove করবে।
//* T[K]: প্রতিটি property-এর original value type ধরে রাখবে।

type EditableProduct<T> = {
  +readonly[K in keyof T]-?: T[K]
}

type ProductForm = EditableProduct<Product>;