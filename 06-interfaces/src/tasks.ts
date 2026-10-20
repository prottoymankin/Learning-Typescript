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