let balance = 1000;

function updateBalance() {
    document.getElementById("balance").textContent = `Current Balance: $${balance.toFixed(2)}`;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById("deposit").value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
    }
    document.getElementById("deposit").value = '';
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateBalance();
        } else {
            alert("Insufficient funds.");
        }
    }
    document.getElementById("withdraw").value = '';
}
