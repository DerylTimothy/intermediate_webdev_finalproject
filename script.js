function calculateSimpleInterest(principal, rate, time) {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        throw new Error("All inputs must be valid numbers");
    }

    return (p * r * t) / 100;
}

function calculateTotalAmount(principal, interest) {
    return parseFloat(principal) + parseFloat(interest);
}

function calculate() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);

    const interest = calculateSimpleInterest(principal, rate, time);
    const totalAmount = calculateTotalAmount(principal, interest);

    document.getElementById("result").innerText = "Total Interest: $" + interest.toFixed(2);
    document.getElementById("total").innerText = "Total Amount: $" + totalAmount.toFixed(2);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateSimpleInterest, calculateTotalAmount };
}
