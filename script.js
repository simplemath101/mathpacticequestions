// Array of facts about breast cancer
const facts = [
    "Breast cancer is the most common cancer among women worldwide.",
    "Early detection can significantly improve survival rates.",
    "Breast cancer can also occur in men, although it is rare.",
    "A healthy lifestyle can help reduce the risk of breast cancer.",
    "Genetics play a significant role in breast cancer risk.",
    "Regular mammograms can help detect breast cancer early.",
    "Breastfeeding may lower the risk of breast cancer."
];

// Function to rotate through facts
let currentIndex = 0;
function rotateFacts() {
    document.getElementById("fact-rotator").textContent = facts[currentIndex];
    currentIndex = (currentIndex + 1) % facts.length;
}

// Donation prompt function
function promptDonation() {
    alert("Thank you for considering a donation! Please choose your preferred method:\n\nGT Bank: Account Number 2032202001590\nWave Mobile Money: Mobile Number +220 3709558");
}

// Event Listeners
document.querySelector('.donate-button').addEventListener('click', promptDonation);
window.onload = setInterval(rotateFacts, 5000); // Rotate facts every 5 seconds