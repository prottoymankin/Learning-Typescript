type UserId = string | number;

type User = {
  id: UserId;
  name: string;
  email: string;
};

// --------------------------------------------------- //

// We can define objects using both `type aliases` and `interface`, but `interface` is generally preferred and more commonly used for defining object shapes.

interface AUser {
  id: number;
  name: string;
  email: string;
};

const user: AUser = {
  id: 112233,
  name: "Jomidar",
  email: "jomidar@gmail.com"
};

// ---------------------------------------------------- //

/**
 * Similarities:
 * 1. Both can define object properties.
 * 2. Both can define property types.
 * 3. Both can be used to type-check objects.
 * 4. Both can be used with classes.
 */

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// };

type ProductType = {
  id: number;
  name: string;
  price: number;
};

// ------------------------------------------------------ //

// extending an interface with extends

// Another great feature of interface is that we can extend an interface using the extends keyword, and the new interface inherits the properties of the extended interface.

interface Person {
  name: string;
};

interface Employee extends Person {
  employeeId: number;
};

const employee: Employee = {
  name: "John Doe",
  employeeId: 998877,
};

// ------------------------------------------------------ //

// extending multiple interfaces

interface Vehicle {
  brand: string;
  model: string;
};

interface Rental {
  rentalDays: number;
  rentalCost: number;
};

interface RentalVehicle extends Vehicle, Rental {
  rentalId: number;
};

const rentalVehicle: RentalVehicle = {
  brand: "Toyota",
  model: "Corolla",
  rentalDays: 5,
  rentalCost: 15000,
  rentalId: 192837465,
};

// ------------------------------------------------------- //

// Can interface extend type alises ?

// Yes, an `interface` can extend a `type alias`, but there is a catch. It can extend a `type alias` that defines an object shape, but it cannot extend a union type or other types that do not represent a statically known object shape.

type AnimalType = {
  name: string;
};

interface Mammel extends AnimalType {
  hands: number;
};

const human: Mammel = {
  name: "John Doe",
  hands: 2,
};

// --------------------------------------------------------- //

// We can also extend type aliases like interfaces, but the syntax is different.

type AddressType = {
  city: string;
  country: string;
};

type SchoolType = AddressType & {
  name: string;
  students: number;
};

const school: SchoolType = {
  name: "ABC High School, Dhaka",
  students: 500,
  city: "Dhaka",
  country: "Bangladesh"
};

// ---------------------------------------------------------- //

// Can a type alias use an interface ?

// An interface can be used in a type alias using the intersection (&) operator

type UserRoleType = 'user' | 'admin';

interface UserProfile {
  name: string;
  readonly email: string;
  readonly role: UserRoleType;
};

type AdminProfileType = UserProfile & {
  adminSince: Date;
};

const admin: AdminProfileType = {
  name: "John Doe",
  email: "john@gmail.com",
  role: "admin",
  adminSince: new Date()
};

// ---------------------------------------------------------- //

// classes & interfaces

interface Logger {
  log(message: string): void;
};

class ConsoleLogger implements Logger {
  log (message: string): void {
    console.log(message);
  }
};

const logger = new ConsoleLogger();

logger.log("hello");

// ---------------------------------------------------------- //

type ProductIdType = string | number;

type ProductStatusType = "draft" | "published" | "archived";

interface Product {
  id: ProductIdType;
  name: string;
  price: number;
  status: ProductStatusType;
};

interface DigitalProduct extends Product {
  downloadUrl: string;
};

type PhysicalProductType = Product & {
  weightInGrams: number;
};

const ebook: DigitalProduct = {
  id: "EBOOK-101",
  name: "TypeScript Mastery",
  price: 49,
  status: "published",
  downloadUrl: "/download/typescript"
};

const keyboard: PhysicalProductType = {
  id: "KB-101",
  name: "Mechanical Keyboard",
  price: 10000,
  status: "published",
  weightInGrams: 900
};