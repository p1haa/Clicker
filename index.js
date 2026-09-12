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
let upgradec100 = 150;
let upgradectext100 = document.getElementById("upgradectext100");

//Autoclicker and text
let autob = document.getElementById("autob");
let autoc = 50;
let autoctext = document.getElementById("autoctext");
let autopower = 0;
let autoptext = document.getElementById("autop")



//A function to refresh all text
function allTextRefresh() {
    moneytext.textContent = "Money: " + money + "$";
    upgradectext1.textContent = "Cost: " + upgradec1 + "$";
    upgradectext100.textContent = "Cost: " + upgradec100 + "$";
    clickptext.textContent = "Click power: " + clickpower + "$ per click";
    autoctext.textContent = "Cost: " + autoc + "$";
    autoptext.textContent = "Autoclicker power: " + autopower + "$ per second";
}

//Adds money and refreshes text
button.onclick = function () {
    money += clickpower;
    broke.style.display = "none";1
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

autob.onclick = function () {
    if (money < autoc) {
        console.error("NOT ENOUGH MONEY");
        broke.style.display = "block";
    }
    else {
        autopower += 1;
        money -= autoc;
        autoc += Math.floor(50 * (autopower * 0.15));
        allTextRefresh();
    }
}

//Autoclicker function and cycle
function autoClickerCycle() {
    money += autopower;
    allTextRefresh();
}

setInterval(autoClickerCycle, 1000);
