const facts = [
    "Breast cancer is the most common cancer among women worldwide.",
    "Men can also get breast cancer.",
    "1 in 8 women will be diagnosed with breast cancer in her lifetime.",
    "Regular screenings improve early detection.",
];

function rotateFacts() {
    const factElement = document.getElementById("fact-rotator");
    let index = 0;

    setInterval(() => {
        factElement.textContent = facts[index];
        index = (index + 1) % facts.length;
    }, 5000);
}

function promptDonation() {
    alert("Thank you for considering a donation! Support us via GT Bank (2032202001590) or Wave Mobile Money (+220 3709558).");
}

document.addEventListener("DOMContentLoaded", () => {
    rotateFacts();
    const donateButton = document.querySelector(".donate-button");
    donateButton.addEventListener("click", promptDonation);
});