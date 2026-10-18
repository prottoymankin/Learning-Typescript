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