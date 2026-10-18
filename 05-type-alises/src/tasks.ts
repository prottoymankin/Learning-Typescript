// Task 01
type UserId = string | number;

const printUserId = (userId: UserId) => {
  if (typeof userId === "string") {
    console.log(userId.toUpperCase());
  } else {
    console.log(userId.toFixed(0));
  }
};