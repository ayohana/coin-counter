const QUARTER = 0.25;
const DIME = 0.10;
const NICKEL = 0.05;
const PENNY = 0.01;

export class Counter {

  constructor(input) {
    this.userInput = parseFloat(input.toFixed(2));
    this.quarters = 0;
    this.dimes = 0;
    this.nickels = 0;
    this.pennies = 0;
  }


  // check if input is empty or NaN
  // if input > 0.25, divide input with quarters
  // if input > 0.10, divide input with dimes
  // if input > 0.05, divide input with nickels
  // if input > 0, divide input with pennies
  countCoins(input) {
    if (isNaN(input) || input <= 0 || !input) {
      return;
    }

    let coinValue;
    let coinName;
    let coinCount;
    let remaining;

    if (input >= QUARTER) {
      coinValue = QUARTER;
      coinName = "quarters";
    } else if (input >= DIME) {
      coinValue = DIME;
      coinName = "dimes";
    } else if (input >= NICKEL) {
      coinValue = NICKEL;
      coinName = "nickels";
    } else {
      coinValue = PENNY;
      coinName = "pennies";
    }

    if (input >= coinValue) {
      coinCount = Math.floor(input / coinValue);
      remaining = parseFloat((input % coinValue).toFixed(2));
    }

    this[`${coinName}`] = coinCount;
    console.log(`>>>>>>>>>>>>>>>>>> ${coinName} = ${coinCount}`);

    return this.countCoins(remaining);
  }

}