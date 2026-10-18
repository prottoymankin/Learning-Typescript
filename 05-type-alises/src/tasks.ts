// Task 01
type UserId = string | number;

const printUserId = (userId: UserId) => {
  if (typeof userId === "string") {
    console.log(userId.toUpperCase());
  } else {
    console.log(userId.toFixed(0));
  }
};

// Task 02
type Theme = "light" | "dark" | "system";

const setTheme = (theme: Theme) => {
  console.log(`Set theme: ${theme}`);
};

setTheme("dark");
setTheme("light");
setTheme("system");

// Task 03
type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

// Task 04
type CardPayment = {
  method: "card";
  amount: number;
  lastFourDigit: string;
};

type UpiPayment = {
  method: "upi";
  amount: number;
  upiId: string;
};

type Payment = CardPayment | UpiPayment;

const processPayment = (payment: Payment) => {
  switch (payment.method) {
    case "card":
      console.log(payment.lastFourDigit);
      break;
    
    case "upi":
      console.log(payment.upiId);
      break;
  }
};

// Task 05
type User = {
  id: number;
  name: string;
  email: string;
};

type ApiState = { status: "loading" } | { status: "success"; data: User[] } | { status: "error"; message: string };

const renderState = (state: ApiState) => {
  switch (state.status) {
    case "loading": return "Loading...";
    case "success": return state.data;
    case "error": return `Error: ${state.message}`;
  }
};

// Task 06
//* MixedValues: Each element can be either a string or a number.
type MixedValues = (string | number)[];

const mixedValues: MixedValues = [10, "ten", 20, "twenty"];

// HomogeneousValues: The entire array must contain only strings or only numbers.
type HomogeneousValues = string[] | number[];

const homogeneousValues_1: HomogeneousValues = [10, 20, 30, 40];
const homogeneousValues_2: HomogeneousValues = ["ten", "twenty", "thirty", "forty"];

 //! Error
// const homogeneousValues_3: HomogeneousValues = [10, "twenty"];