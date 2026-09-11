"use strict"

let button = document.getElementById("button");
let moneytext = document.getElementById("money");
let money = 0;
let clickpower = 1;
let upgradeb = document.getElementById("upgrade");
let upgradec = 10;
let upgradectext = document.getElementById("upgradectext");
let broke = document.getElementById("broke")

function allTextRefresh() {
    moneytext.textContent = "Money: " + money + "$";
    upgradectext.textContent = "Cost: " + upgradec + "$";
    broke.style.display = "none";
}

button.onclick = function () {
    money += clickpower;
    allTextRefresh();
}
upgradeb.onclick = function () {
    if (money < upgradec) {
        console.error("NOT ENOUGH MONEY");
        broke.style.display = "block";
    }
    else {
        clickpower += 1;
        money -= upgradec;
        upgradec += 15;
        allTextRefresh();
    }
}