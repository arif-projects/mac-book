// calling all span tag 
const bestPrice = 1299;
const total = document.getElementById('initialTotal');
var memoryCost = document.getElementById('memory');
var storageCost = document.getElementById('storage');
var transportCost = document.getElementById('delevery');
var grandTotal = document.getElementById('grandTotal');


// calling memoryPrize button,,,
document.getElementById('free').addEventListener('click', function () {
    memoryCost.innerText = 0;
    updateTotal();
});

document.getElementById('MemoryCost').addEventListener('click', function () {
    memoryCost.innerText = 180;
    updateTotal();
});


// calling storagePrize Buttons

document.getElementById('freeStorage').addEventListener('click', function () {
    storageCost.innerText = 0;
    updateTotal();
})
document.getElementById('StorageCost1').addEventListener('click', function () {
    storageCost.innerText = 100;
    updateTotal();
})
document.getElementById('StorageCost2').addEventListener('click', function () {
    storageCost.innerText = 180;
    updateTotal();
})


//calling transport prize button
document.getElementById('freeTransportCost').addEventListener('click', function () {
    transportCost.innerText = 0;
    updateTotal();
})

document.getElementById('PaidTransportCost').addEventListener('click', function () {
    transportCost.innerText = 20;
    updateTotal();
})


// total value calculation function

function updateTotal() {
    const bestPrice = 1299;
    const finalStoragePrice = parseInt(storageCost.innerText);
    const finalMemoryPrice = parseInt(memoryCost.innerText);
    const finalTransportCost = parseInt(transportCost.innerText);
    const sum = bestPrice + finalMemoryPrice + finalStoragePrice + finalTransportCost;
    total.innerText = sum;
    grandTotal.innerText = sum;
    return sum;

}


//promoCode discount
document.getElementById('dicountButton').addEventListener('click', function () {
    var code = document.getElementById('code');
    var promoCode = code.value;
    var totalValue = updateTotal();
    var totalValueNumber = Number(totalValue);

    //  logic make 
    if (promoCode == 'stevekaku') {
        grandTotal.innerText = totalValueNumber - (totalValueNumber * .20);

    }
    else {
        grandTotal.innerText = Number(totalValue);
    }

    // clear the input value 
    document.getElementById("code").value = "";


});


// The End    


