/* In this task, you will need to write several tests for each tested function. You could write all of your tests directly at the top level, but it's better to group related tests so their output is more readable. Jest has the describe() method just for that. Read about it here and apply it in your tests for this task:

Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
Write at least 3 tests for each of the calculator methods.
Group tests for each method using describe() method. */

class Calculator {
 
    static add(a, b) {
        return a + b; 
    }

    static subtract(a, b) {
        return a - b;
    }

    static divide(a, b) {
        return a / b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

module.exports = Calculator;