"use strict"


//MONEY VARS
let button = document.getElementById("button");
let moneytext = document.getElementById("money");
let money = 0;
let broke = document.getElementById("broke");
let moneypress = 0

//UPGRADE AND CLICK POWER VARS
let clickpower = 1;
let clickptext = document.getElementById("clickpower");

//Upgrade LVL 1
let upgradeb1 = document.getElementById("upgrade1");
let upgradec1 = 10;
let upgradectext1 = document.getElementById("upgradectext1");

//Upgrade LVL 10
let upgradeb10 = document.getElementById("upgrade10");
let upgradec10 = 150;
let upgradectext10 = document.getElementById("upgradectext10");

//Autoclicker and text
let autob = document.getElementById("autob");
let autoc = 50;
let autoctext = document.getElementById("autoctext");
let autopower = 0;
let autoptext = document.getElementById("autop");

//Autoclicker LVL 10
let autob10 = document.getElementById("autob10");
let autoc10 = 200;
let autoctext10 = document.getElementById("autoctext10");

// GOLDEN BUTTON!!
let goldenb = document.getElementById("golden");
let goldencost = 300

//A function to refresh all elements
function allElementRefresh() {
    //Text refresh
    moneytext.textContent = "Money: " + money + "$";
    upgradectext1.textContent = "Cost: " + upgradec1 + "$";
    upgradectext10.textContent = "Cost: " + upgradec10 + "$";
    clickptext.textContent = "Click power: " + clickpower + "$ per click";
    autoctext.textContent = "Cost: " + autoc + "$";
    autoctext10.textContent = "Cost: " + autoc10 + "$";
    autoptext.textContent = "Autoclicker power: " + autopower + "$ per second";
    //Element refresh
    if (moneypress === 50) {
        goldenb.style.display = "block";
    }


}

//Adds money and refreshes text
button.onclick = function () {
    money += clickpower;
    broke.style.display = "none";
    moneypress += 1;
    allElementRefresh();
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
        allElementRefresh();
    }
}

upgradeb10.onclick = function () {
    if (money < upgradec10) {
        console.error("NOT ENOUGH MONEY");
        broke.style.display = "block";
    }
    else {
        if (clickpower === 1) {
            clickpower = 10;
        }
        else {
            clickpower += 10;
        }
        money -= upgradec10;
        upgradec10 += Math.floor(150 * (clickpower * 0.015));
        allElementRefresh();
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
        allElementRefresh();
    }
}

autob10.onclick = function () {
    if (money < autoc10) {
        console.error("NOT ENOUGH MONEY");
        broke.style.display = "block";
    }
    else {
        autopower += 10;
        money -= autoc10;
        autoc10 += Math.floor(200 * (autopower * 0.015));
        allElementRefresh();
    }
}

goldenb.onclick = function () {
    goldenb.style.display = "none";
    moneypress = 0;
    money += goldencost;
    allElementRefresh();
}

//Autoclicker function and cycle
function autoClickerCycle() {
    money += autopower;
    allElementRefresh();
}

setInterval(autoClickerCycle, 1000);
