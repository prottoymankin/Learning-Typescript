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