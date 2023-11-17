const bankStatement = (balance) => 
((copyBalance) => {
    let balance = copyBalance;      // private variable

    const privateMethod = () => {
        console.log('privateMethod is non-accessable');
        
    };

    privateMethod();

    return {
        withDraw(amount) {
            if(balance-amount > 0) {
                balance -= amount;
                return balance;
            }
            return 'Insufficient Balance'
        }
    }

})(balance);

const firstAccount = bankStatement(200);
console.log(firstAccount.balance);      // undefined
// firstAccount.accessableMethod();       // TypeError: firstAccount.accessableMethod(); is not a function
console.log(firstAccount.withDraw(20));