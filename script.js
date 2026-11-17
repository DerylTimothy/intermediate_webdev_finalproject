function calculateSimpleInterest(principal, rate, years) {
    const p = parseFloat(principal);
    const r = parseFloat(rate);
    const t = parseFloat(years);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        throw new Error("All inputs must be valid numbers");
    }

    return (p * r * t) / 100;
}

function calculate() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;

    const interest = calculateSimpleInterest(principal, rate, years);
    document.getElementById("result").innerText = "Total Interest: $" + interest.toFixed(2);
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = { calculateSimpleInterest };
}
