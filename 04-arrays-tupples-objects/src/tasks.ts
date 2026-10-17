// Task 01 ✅
type Product = {
  readonly id: number;
  name: string;
  price: number;
  category: string;
  tags: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 75000,
    category: "Electronics",
    tags: ["computer", "work", "technology"],
  },
  {
    id: 2,
    name: "Smartphone",
    price: 30000,
    category: "Electronics",
    tags: ["mobile", "communication", "technology"],
  },
  {
    id: 3,
    name: "T-Shirt",
    price: 800,
    category: "Clothing",
    tags: ["fashion", "casual", "cotton"],
  },
  {
    id: 4,
    name: "Backpack",
    price: 1500,
    category: "Accessories",
    tags: ["bag", "travel", "school"],
  },
  {
    id: 5,
    name: "Book",
    price: 500,
    category: "Education",
    tags: ["learning", "study", "reading"],
  },
];

// Task 02
//! Cannot reassign value because it is a readonly property.
// products[0]?.id = 10;

// Task 03
type ApiResponse = [number, string, boolean];

const response_1: ApiResponse = [200, "Product fetched successfully.", true];
const response_2: ApiResponse = [201, "Product created succeessfully.", true];

//! Invalid: Missing the HTTP status code.
// const response_3: ApiResponse = ["Internal server error.", false];

// Task 04
type Coordinate = [number, number, number?];

const point2D: Coordinate = [10, 10];
const point3D: Coordinate = [10, 10, 10];

const printCoordinates = (coordinate: Coordinate) => {
  const [x, y, z] = coordinate;

  console.log(`x: ${x}`);
  console.log(`y: ${y}`);

  if (z !== undefined) console.log(`z: ${z}`);
};

printCoordinates(point2D);
printCoordinates(point3D);

// Task 05
const calculateAverage = (numbers: readonly number[]) => {
  if (numbers.length === 0) return 0;

  const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return total / numbers.length;
};

// Task 06
type User = {
  id: number; 
  name: string;
  active: boolean;
};

const printUser = (user: User) => {
  console.log(user.id, user.name, user.active);
}

// In the tuple version, it is not immediately clear what each value represents because we access the values using numeric indexes. In the object version, named properties such as `id`, `name`, and `active` clearly indicate what each value represents. Therefore, the object version is more readable and easier for another developer to understand and maintain.

// Bonus Challenge
type CustomerType = {
  id: number;
  name: string;
};

type ProductType = {
  id: number;
  name: string;
  price: number;
  category: string;
  tags: string[];
};

type AddressType = {
  city: string;
  country: string;
};

type Order = {
  id: number;
  customer: CustomerType;
  products: ProductType[];
  shippingAddress: AddressType;
  couponCode?: string;
  orderTotal: number;
};