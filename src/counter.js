const COINS = {quarters: 0.25, dimes: 0.10, nickels: 0.05, pennies: 0.01};

export class Counter {

  constructor(input) {
    this.userInput = parseFloat(input.toFixed(2));
    this.quarters = 0;
    this.dimes = 0;
    this.nickels = 0;
    this.pennies = 0;
    this.countInQuarters = this.countChange("quarters");
    this.countInDimes = this.countChange("dimes");
    this.countInNickels = this.countChange("nickels");
    this.countInPennies = this.countChange("pennies");
  }

  // RECURSION =========================================
  countCoins(input) {
    if (isNaN(input) || input <= 0 || !input) {
      return;
    }

    let coinValue;
    let coinCount;
    let remaining;

    if (input >= COINS["quarters"]) {
      coinValue = COINS["quarters"];
    } else if (input >= COINS["dimes"]) {
      coinValue = COINS["dimes"];
    } else if (input >= COINS["nickels"]) {
      coinValue = COINS["nickels"];
    } else if (input >= COINS["pennies"]) {
      coinValue = COINS["pennies"];
    } else {
      return;
    }

    if (input >= coinValue) {
      coinCount = Math.floor(input / coinValue);
      remaining = parseFloat((input % coinValue).toFixed(2));
    }

    let coinName = Object.keys(COINS).find(name => COINS[name] === coinValue)
    this[`${coinName}`] = coinCount;

    return this.countCoins(remaining);
  }

  // CLOSURE ==========================================
  countChange(coinName) {
    return function (input) {
      let countChange = COINS[`${coinName}`];
      let coinCount = Math.floor(input / countChange);
      return coinCount;
    }
  }

}