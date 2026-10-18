// Union Type

//* Union Type allows a variable to hold a value of one of the specified types.

let userId: string | number;

userId = "USR-101";

userId = 101;

//! Error: Boolean values are not allowed because the union type only accepts string or number.
// userId = true;

// Narrowing Union

const printId = (id: string | number) => {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
};

printId("USR-102");
printId(102);

//! Error: printId function will only receive either a string or a number.
// printId(true);

//* Type Narrowing is the process of narrowing down a variable's possible types using conditions or type guards.

// Literal Type

//* Literal Types allow specific values to be used as types instead of general types like string or number.

let direction: "left" | "right";

direction = "left";

direction = "right";

//! Error: "up" s not an allowed value of the direction type.
// direction = "up";

type orderStatus = "Pending" | "Processing" | "Shipping" | "Delivered";

let status: orderStatus = "Processing";

// orderStatus = "Done" //! Error

type Signal = "Red" | "Yellow" | "Green";

const setSignla = (signal: Signal) => {
  console.log(`Signal: ${signal}`);
};

setSignla("Yellow");
setSignla("Green");

// setSignla("black"); //! Error

// Type Alises

//* A type alias gives a custom name to a type, making it easier to reuse and maintain.

type UserId = string | number;

const id_1: UserId = "USR-103";
const id_2: UserId = 103;

type User = {
  id: UserId;
  name: string;
  email: string;
};

const user: User = {
  id: 104,
  name: "John Doe",
  email: "johndoe@gmail.com"
};


// --------------------------------------------------

type ACardPayment = {
  method: "card",
  cardLast4Digit: string;
};

type BankTransfer = {
  method: "bank";
  accountNumber: string;
};

type Payment = ACardPayment | BankTransfer;

const myPayment: Payment = {
  method: "bank",
  accountNumber: "123456789"
};

const paymentDescription = (payment: Payment) => {
  if (payment.method === "card") {
    // do something
  } else {
    // do something
  }
};

// --------------------------------------------------


// -------------------------------------------------- 

const findUserName = (userId: number): string | null => {
  if (userId === 1) {
    return "user";
  }

  return null;
};

const myName = findUserName(2);

if (myName !== null) {
  console.log(myName);
};

// ---------------------------------------------------


// ---------------------------------------------------

// MixedValues: Each element can be either a string or a number.
type MixedValues = (string | number)[];

const mixedValues: MixedValues = [10, "ten", 20, "twenty"];

// HomogeneousValues: The entire array must contain only strings or only numbers.
type HomogeneousValues = string[] | number[];

const homogeneousValues_1: HomogeneousValues = [10, 20, 30, 40];
const homogeneousValues_2: HomogeneousValues = ["ten", "twenty", "thirty", "fourty"];

// const homogeneousValues_3: HomogeneousValues = [10, "twenty"]; //! Error

// ----------------------------------------------------

type CardPayment = {
  method: "card";
  amount: number;
  lastFourDigit: string;
};

type BkashPayment = {
  method: "bkash";
  amount: number;
  accountNumber: string;
};

type BankPayment = {
  method: "bank";
  amount: number;
  accountNumber: string;
};

type CustomPayment = CardPayment | BkashPayment | BankPayment;

const processPayment = (payment: CustomPayment) => {
  switch(payment.method) {
    case "bank":
      console.log(payment.accountNumber);
      break;
    
    case "card":
      console.log(payment.lastFourDigit);
      break;

    case "bkash":
      console.log(payment.accountNumber);
      break;
  }
};

// -----------------------------------------------------


// -----------------------------------------------------

type APIState = { status: "loading"; } | { status: "success"; data: User[]; } | { status: "error"; message: string; };

const render = (state: APIState) => {
  switch (state.status) {
    case "loading": 
      return "Loading...";
    
    case "success": 
      return `Users: ${state.data.length}`

    case "error":
      return `Error: ${state.message}`;
  }
}

// ------------------------------------------------------