/* Q10. Simple Closure 
const c = counter();
c(); // 1
c(); // 2
c(); // 3 */

function counter() {
    let count = 0;
    return function() {
        count += 1;
        console.log(count);
    };
}
const c = counter();
c(); // 1
c(); // 2
c(); // 3

/* Q11. Medium Closure
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700 */

function createWallet() {
    let balance = 0;
    return {
        addMoney: function(amount) {
            balance += amount;
        },
        checkBalance: function() {
            console.log(`Current Balance: ${balance}`);
        }
    };
}
let myWallet = createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
myWallet.checkBalance();  // should show 700

