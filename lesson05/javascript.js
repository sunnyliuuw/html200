let balance = 0;
let input;
do {
  input = prompt('Welcome to bank system!\nW - Withdraw\nD - Deposit\nB - Check balance\nQ - Exit');
  switch(input.toLowerCase()) {
    case 'q':
      alert('Exiting the system');
      break;
    case 'w':
      let wAmount;
      do {
        wAmount = Number(prompt('How much do you want to withdraw (Please enter a valid number)'));
      } while (isNaN(wAmount) || wAmount < 0);
      if (balance - wAmount < 0) {
        alert('$' + wAmount + ' exceeds your total balance!');
      } else if (balance - wAmount < 300 && balance - wAmount >= 0) {
        let confirm = prompt('Withdraw ' + wAmount + ' will leave your balance less than $300.\nDo you still want to withdraw?\nType Y to confirm');
        if (confirm.toLowerCase() === 'y') {
            balance -= wAmount;
        }
      }
      if (balance < 50) {
        alert('Your balance is low!');
      }
      break;
    case 'd':
      let dAmount;
      do {
        dAmount = Number(prompt('How much do you want to deposit\nPlease enter a valid number between 0 and 50000'));
      } while(isNaN(dAmount) || dAmount < 0 || dAmount > 50000);
      balance += dAmount;
      if (balance < 50) {
        alert('Your balance is low!');
      }
      break;
    case 'b':
      alert('Your total balance is $' + balance);
      if (balance < 50) {
        alert('Your balance is low!');
      }
      break;
    default:
      alert('Your input is not an option');
  }
} while (input.toLowerCase() != 'q');
