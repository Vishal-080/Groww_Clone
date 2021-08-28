function deposit() {
    let options = document.querySelector('.deposit-options');
    const withdrawOptions = document.querySelector('.withdraw-options')
    options.style.visibility = 'visible';
    withdrawOptions.style.visibility = 'hidden';
    console.log("Hai");
}
deposit()

function depositmoney() {
let amount = document.getElementById('money').value;
console.log('amount:', (amount));
const toNumber = Number(amount);
addBalance(toNumber);
}


let newAmount = JSON.parse(localStorage.getItem('balance'));
var balance = newAmount;

// controller

function addBalance(amount) {
balance += amount;
localStorage.setItem('balance', balance.toString());

render();
}

// view
const availableBalanceDiv = document.querySelector(".available-balance");

function render() {
availableBalanceDiv.innerText = balance.toLocaleString();
}
render();



//withdraw amount function

// accessing the totalbalnce from the localstorage
let totalAmount = JSON.parse(localStorage.getItem('balance'));
console.log('totalAmount:', totalAmount)

function withdraw() {
console.log("hai");

//creating all the variables and assing the values to it
const disapper = document.querySelector('.deposit-options');
const withdrawOptions = document.querySelector('.withdraw-options')
const displayTotalMoney = document.querySelector('.show-amount');
const enteredAmount = document.getElementById('withdraw-money')
const withdrawAll = document.getElementById('withdraw-all__checkbox');
const withdrawMoneyButton = document.querySelector('.withdraw-money__button');
// console.log('enteredAmount:', enteredAmount)


displayTotalMoney.innerText = totalAmount;

//making eveyything to  be disable if wallet got 0
if(totalAmount <= 0) {
alert("You don't have sufficent amount to withdraw");
enteredAmount.style.cursor = 'not-allowed';
withdrawAll.style.cursor = 'not-allowed';
withdrawMoneyButton.style.cursor = 'not-allowed';
enteredAmount.disabled = true;
withdrawAll.disabled = true;
withdrawMoneyButton.disabled = true;
withdrawMoneyButton.style.backgroundColor = 'grey'

}

// disapper.innerText = '';
disapper.style.visibility = 'hidden';
withdrawOptions.style.visibility = 'visible';



}

function withdrawmoney() {
const withdrawMoneyButton = document.querySelector('.withdraw-money__button');

console.log('totalAmount:', totalAmount)
const enteredAmount = document.getElementById('withdraw-money').value;

console.log('enteredAmount:', enteredAmount)

//checking wheter enteredAmount is greater then the wallet balance
let remainingBalance = 0 ;



// let remainingBalance =  0;
// let totalAmount = 500;

if (!enteredAmount) return alert('Please enter valid amount to withdraw'); // checking for falsy

// now from here, the enteredAmount should exists
if (enteredAmount >  totalAmount) return alert('you dont have enought funds');

// when everything just find we substract and reassign
remainingBalance = totalAmount - enteredAmount






let remainingBalanceJson = JSON.stringify(remainingBalance);
localStorage.setItem('balance',remainingBalanceJson);



let availableBalanceDiv = document.querySelector(".available-balance")
availableBalanceDiv.innerHTML = remainingBalanceJson;
console.log('availableBalanceDiv:', availableBalanceDiv);
}



//Declearing the variables for the dropDownMenu
let userMenu = document.querySelector('.userIcon');
const menuDiv = document.createElement('div');
let darkMode = document.createElement('div');
const name = document.createElement('div');
const email = document.createElement('div');
const importFunds = document.createElement('div');
const watchList = document.createElement('div');
const orders = document.createElement('div');
const help = document.createElement('div');
const logOut = document.createElement('div');
const close = document.createElement('span');

//creting classes for the above variables
menuDiv.classList.add('menu')
darkMode.classList.add('darkModeOn')
importFunds.classList.add('importFunds')



function dropDownMenu() {

let count = 0;
importFunds.innerHTML = "Import Funds";
watchList.innerHTML = "Watch List";
orders.innerHTML = "Order";
darkMode.innerHTML = "Dark Mode";
logOut.innerHTML = "Log Out";
close.innerHTML = "close&times;";

//Cretaing a class for menuDiv

menuDiv.classList.add('content');

//appending all the items to the menuDiv

menuDiv.append(close,importFunds,watchList,orders,darkMode,logOut);

//appending the items of the menuDiv to the userMenu
userMenu.append(menuDiv);

close.onclick = function() {
    menuDiv.style.display = "none";
  }

count++;

if (count >= 1) {
    userMenu.removeEventListener('click', dropDownMenu);
}

}
// c.classList.add('baby')



function darkModeToggle() {
let darkModeButton = document.querySelector('.darkModeOn');
// let a = document.querySelector('.stock-name')
// let b = document.querySelector('.menu')
// a.style.color = 'white'
// b.style.color = 'black'
darkModeButton = document.body;
 darkModeButton.classList.toggle('dark-mode');

}

userMenu.addEventListener('click', dropDownMenu);
darkMode.addEventListener('click',darkModeToggle)