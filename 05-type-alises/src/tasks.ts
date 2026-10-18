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