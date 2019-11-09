let totalAmount = document.getElementById("form");
let grandTotal = document.getElementById("new-total");
let submission = document.getElementById("submit");
let inputAmount = document.getElementById("input1");
let tipAmount = document.getElementById("input2");

submission.addEventListener("click", function() {
    var tip = parseFloat(tipAmount.value/100)*parseFloat(inputAmount.value);
    var total = tip+parseFloat(inputAmount.value);
    console.log(total);
    grandTotal.innerHTML = total;
}
);

//alert(`The grand total is $${grandTotal.innerHTML}`
//alert(`The amount before tip is $${inputAmount.value}`)