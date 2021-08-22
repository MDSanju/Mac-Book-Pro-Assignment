// extra features cost add
function extraFeaturesCost(extraFeatures, featureExtraCost) {
    const featuresCost = document.getElementById(extraFeatures);
    featuresCost.innerText = featureExtraCost;
}

// total cost vary for getting extra features and delivery cost with
function totalPrice() {
    const immutablePrice = document.getElementById('immutable-price');
    const immutablePriceNumeric = parseFloat(immutablePrice.innerText);
    const extraMemoryCost = document.getElementById('extra-memory-cost');
    const extraMemoryCostNumeric = parseFloat(extraMemoryCost.innerText);
    const extraStorageCost = document.getElementById('extra-storage-cost');
    const extraStorageCostNumeric = parseFloat(extraStorageCost.innerText);
    const deliveryCharge = document.getElementById('delivery-charge');
    const deliveryChargeNumeric = parseFloat(deliveryCharge.innerText);
    const totalPrice = immutablePriceNumeric + extraMemoryCostNumeric + extraStorageCostNumeric + deliveryChargeNumeric;
    const totalPriceText = document.getElementById('total-price');
    totalPriceText.innerText = totalPrice;
    // final calculation total cost
    document.getElementById('final-calculation').innerText = document.getElementById('total-price').innerText;
}

// stevekaku discount
function steveKakuDiscount() {
    const pomo = document.getElementById('steve-kaku');
    const finalCalculation = document.getElementById('final-calculation').innerText;
    const discount = (finalCalculation / 100) * 20;
    const afterDiscount = finalCalculation - discount;
    // discount with special pomo code
    if (pomo.value == 'stevekaku') {
        document.getElementById('final-calculation').innerText = afterDiscount;
        pomo.value = '';
    } else {
        pomo.value = '';
    }
}




// 8GB unified memory button event handler
document.getElementById('8gb-memory').addEventListener('click', function() {
    extraFeaturesCost('extra-memory-cost', 0);
    totalPrice();
});

// 16GB unified memory button event handler
document.getElementById('16gb-memory').addEventListener('click', function() {
    extraFeaturesCost('extra-memory-cost', 180);
    totalPrice();
});

// 256GB SSD storage button event handler
document.getElementById('256gb-ssd').addEventListener('click', function() {
    extraFeaturesCost('extra-storage-cost', 0);
    totalPrice();
});

// 512GB SSD storage button event handler
document.getElementById('512gb-ssd').addEventListener('click', function() {
    extraFeaturesCost('extra-storage-cost', 100);
    totalPrice();
});

// 1TB SSD storage button event handler
document.getElementById('1tb-ssd').addEventListener('click', function() {
    extraFeaturesCost('extra-storage-cost', 180);
    totalPrice();
});

// Friday, Aug 25 FREE Prime Delivery button event handler
document.getElementById('free-delivery').addEventListener('click', function() {
    extraFeaturesCost('delivery-charge', 0);
    totalPrice();
});

// Friday, Aug 21 Delivery charge $20 button event handler
document.getElementById('urgent-delivery').addEventListener('click', function() {
    extraFeaturesCost('delivery-charge', 20);
    totalPrice();
});

// pomo code apply button event handler
document.getElementById('steve-btn').addEventListener('click', function() {
    steveKakuDiscount();
});