import { Counter } from "../src/counter";

describe("Counter", () => {

  let newCounter;

  beforeEach(() => {
    newCounter = new Counter(4.99);
  });

  test("creates an instance of Counter object", () => {
    expect(newCounter).toBeInstanceOf(Counter);
  });

  test("data type of userInput property should be a number", () => {
    expect.objectContaining({
      userInput: expect.any(Number)
    });
  });

  test("new Counter instance should store user input with two decimal places", () => {
    expect(newCounter.userInput).toEqual(4.99);
  });

  test("calculates number of quarters to return", () => {
    newCounter.countCoins(newCounter.userInput);
    expect(newCounter.quarters).toEqual(19);
  });

  test("calculates number of dimes to return", () => {
    newCounter.countCoins(newCounter.userInput);
    expect(newCounter.dimes).toEqual(2);
  });

  test("calculates number of nickels to return", () => {
    newCounter.countCoins(newCounter.userInput);
    expect(newCounter.nickels).toEqual(0);
  });

  test("calculates number of pennies to return", () => {
    newCounter.countCoins(newCounter.userInput);
    expect(newCounter.pennies).toEqual(4);
  });

  test("counts coins correctly using a different user input", () => {
    let testCounter = new Counter(2.15);
    testCounter.countCoins(testCounter.userInput);
    expect(testCounter.quarters).toEqual(8);
    expect(testCounter.dimes).toEqual(1);
    expect(testCounter.nickels).toEqual(1);
    expect(testCounter.pennies).toEqual(0);
  });

  test("counts coins in quarters only", () => {
    let changeInQuarters = newCounter.countInQuarters(newCounter.userInput);
    expect(changeInQuarters).toEqual(499);
  });

  test("counts coins in dimes only", () => {
    let changeInDimes = newCounter.countInDimes(newCounter.userInput);
    expect(changeInDimes).toEqual(499);
  });

  test("counts coins in nickels only", () => {
    let changeInNickels = newCounter.countInNickels(newCounter.userInput);
    expect(changeInNickels).toEqual(499);
  });

  test("counts coins in pennies only", () => {
    let changeInPennies = newCounter.countInPennies(newCounter.userInput);
    expect(changeInPennies).toEqual(499);
  });

  test.todo("add UI to gather user input");

});