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
    expect(newCounter.quarters).toEqual(19);
  });

  test("calculates number of dimes to return", () => {
    expect(newCounter.dimes).toEqual(2);
  });

  test("calculates number of nickels to return", () => {
    expect(newCounter.nickels).toEqual(0);
  });

  test("calculates number of pennies to return", () => {
    expect(newCounter.pennies).toEqual(4);
  });

  test.todo("change input value to 2.15 and calculates the correct number of coins");
  test.todo("add UI to gather user input");

});