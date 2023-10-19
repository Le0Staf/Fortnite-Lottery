let currency = 60;
let itemId = 0;
let totalPurchases = 0;

const price = ["Skull Trooper", "The Reaper", "Renegade Raider", "1000 V-BUCKS"]

document.getElementById("currency").innerHTML = currency;

function BuyTicket() {
    if (currency >= 20) {
        let itemPrice = 0;
        itemId++;
        totalPurchases++;
        document.getElementById("amount").innerHTML = totalPurchases;
        const randomElement = price[Math.floor(Math.random() * price.length)];
        if (randomElement == "1000 V-BUCKS") {
            itemPrice = 10;
        }
        else if (randomElement == "Skull Trooper") {
            itemPrice = 15;
        }
        else if (randomElement == "Renegade Raider") {
            itemPrice = 25;
        }
        else if (randomElement == "The Reaper") {
            itemPrice = 30;
        }

        document.getElementById("price1").innerHTML = randomElement;
        currency = currency - 20;
        document.getElementById("currency").innerHTML = currency;

        document.getElementById("inventory").innerHTML += `
            <div class="item" id="${itemId}">
                <p>${randomElement}</p>
                <button onclick="SellItem(${itemId}, ${itemPrice})" id="sell-button">${itemPrice} SELL</button>
            </div>
        `;
    }
}

function SellItem(sellItemId, sellItemPrice) {
    if (sellItemPrice == 10) {
        let removeElement = document.getElementById(sellItemId);
        removeElement.remove();
        currency = currency + 10;
        document.getElementById("currency").innerHTML = currency;
    } 
    else if (sellItemPrice == 15) {
        let removeElement = document.getElementById(sellItemId);
        removeElement.remove();
        currency = currency + 15;
        document.getElementById("currency").innerHTML = currency;
    }
    else if (sellItemPrice == 25) {
        let removeElement = document.getElementById(sellItemId);
        removeElement.remove();
        currency = currency + 25;
        document.getElementById("currency").innerHTML = currency;
    }
    else if (sellItemPrice == 30) {
        let removeElement = document.getElementById(sellItemId);
        removeElement.remove();
        currency = currency + 30;
        document.getElementById("currency").innerHTML = currency;
    }

}