import users from "./users.js";
const calculateTotalBalance = (users) => {
  const totalUsersBalance = users.reduce((totalBalance, money) => totalBalance + money.balance, 0);
  return totalUsersBalance;
  // твой код
};

console.log(calculateTotalBalance(users)); // 20916
