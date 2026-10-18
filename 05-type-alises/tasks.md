### Task 01

Create a UserId type that accepts either a number or a string. Write printUserId() and handle both forms using narrowing.

### Task 02 

Create a literal union called Theme with "light", "dark", and "system". Create a function that accepts only those values.

### Task 03

Create an OrderStatus literal union containing "pending", "processing", "shipped", and "delivered".

### Task 04

Model CardPayment and UpiPayment as separate object types. Combine them into a Payment union using a literal method property. Write a function that handles each safely.

### Task 05

Create a discriminated union with loading, success with a list of users, and error with an error message. Write renderState() using switch.

### Task 06

Create one variable of type (string | number)[] and another of type string[] | number[]. Add valid and invalid examples and explain why the two types behave differently.