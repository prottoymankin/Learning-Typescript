// Task 01

type CustomerIdType = string | number;

interface Address {
  city: string;
  country: string;
};

type GenderType = "male" | "female" | "others";

type CustomerType = {
  customerId: CustomerIdType;
  name: string;
  email: string;
  phone: string;
  address: Address;
  gender: GenderType;
  dateOfBirth: Date;
  registrationData: Date;
  isActive: boolean;
};

interface Customer  {
  readonly customerId: CustomerIdType;
  name: string;
  readonly email: string;
  readonly phone: string;
  address?: Address;
  gender?: GenderType;
  dateOfBirth?: Date;
  registrationData: Date;
  isActive: boolean;
};

// Task 02

interface Person {
  name: string;
  age: number;
  email: string;
};

interface Employee extends Person {
  employeeId: string | number;
  position: string;
  salary: number;
};

const employee: Employee = {
  employeeId: "EMP-101",
  position: "Full-Stack Developer",
  salary: 50000,
  name: "John Doe",
  age: 24,
  email: "john@gmail.com",
};

// Task 03

type HasAddress = {
  address: Address;
};

type HasContact = {
  phone: string;
};

type ACustomer = HasAddress & HasContact & {
  name: string;
  email: string;
};

const customer: ACustomer = {
  name: "John Doe",
  email: "john@gmail.com",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  },
  phone: "+8801711223344"
};

// Task 04

type PaymentMethod = "card" | "bkash" | "bank";

//* A type alias is a natural choice here because it can define a literal union.
//* An interface is mainly used to define object shapes and cannot directly define a literal union.

// Task 05

type productIdType = string | number;
type productStatusType = "available" | "out-of-stock" | "discontinued" | "coming-soon";

interface Product {
  id: productIdType;
  name: string;
  price: number;
  status: productStatusType;
};

interface DigitalProduct extends Product {
  downloadUrl: string;
  fileSize: number;
};

type PhysicalProduct = Product & {
  weightInGrams: number;
  stockQuantity: number;
};

// Bonus Task

// A type alias is a natural choice for defining a literal union.
type idType = string | number;

type ReservationStatusType = "pending" | "confirmed" | "cancelled";

type PaymentStatusType = "pending" | "completed" | "failed" | "refunded";

type PaymentMethodType = "card" | "bkash" | "bank";

// Interface is suitable for defining the object shape of a property.
interface Property {
  id: idType
  title: string;
  price: number;
  location: string;
};

// Interface is suitable for defining the object shape of a reservation.
interface Reservation {
  reservationId: string | number;
  propertyId: idType;
  startDate: Date;
  endDate: Date;
  status: ReservationStatusType;
};

// Interface is suitable for defining the object shape of a payment.
interface Payment {
  paymentId: idType;
  reservationId: idType;
  amount: number;
  paymentMethod: PaymentMethodType;
  status: PaymentStatusType;
  paymentDate: Date
};