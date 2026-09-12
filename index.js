"use strict"


//MONEY VARS
let button = document.getElementById("button");
let moneytext = document.getElementById("money");
let money = 0;
let broke = document.getElementById("broke");


//UPGRADE AND CLICK POWER VARS
let clickpower = 1;
let clickptext = document.getElementById("clickpower");

//Upgrade LVL 1
let upgradeb1 = document.getElementById("upgrade1");
let upgradec1 = 10;
let upgradectext1 = document.getElementById("upgradectext1");

//Upgrade LVL 100
let upgradeb100 = document.getElementById("upgrade100");
let upgradec100 = 100;
let upgradectext100 = document.getElementById("upgradectext100");


//A function to refresh all text
function allTextRefresh() {
    moneytext.textContent = "Money: " + money + "$";
    upgradectext1.textContent = "Cost: " + upgradec1 + "$";
    upgradectext100.textContent = "Cost: " + upgradec100 + "$";
    broke.style.display = "none";
    clickptext.textContent = "Click power: " + clickpower + "$ per click";
}

//Adds money and refreshes text
button.onclick = function () {
    money += clickpower;
    allTextRefresh();
}

//Upgrade buttons and money check
upgradeb1.onclick = function () {
    if (money < upgradec1) {
        console.error("NOT ENOUGH MONEY");
        broke.style.display = "block";
    }
    else {
        clickpower += 1;
        money -= upgradec1;
        upgradec1 += Math.floor(15 * (clickpower * 0.1));
        allTextRefresh();
    }
}

upgradeb100.onclick = function () {
    if (money < upgradec100) {
        console.error("NOT ENOUGH MONEY");
        broke.style.display = "block";
    }
    else {
        if (clickpower === 1) {
            clickpower = 100;
        }
        else {
            clickpower += 100;
        }
        money -= upgradec100;
        upgradec100 += Math.floor(150 * (clickpower * 0.15));
        allTextRefresh();
    }
}