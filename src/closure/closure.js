const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins; 
  console.log(`MoneyBox: $${saveCoins}`);
};
moneyBox(5);
moneyBox(10);

const moneyBox = () => {
  debugger
  var saveCoins = 0;
  const countCoins = (coins) =>{
    debugger
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};
let myMoneyBox = moneyBox();
myMoneyBox(6);
myMoneyBox(10);
myMoneyBox(10);