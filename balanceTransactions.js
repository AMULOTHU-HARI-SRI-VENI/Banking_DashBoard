let balance = 1000;

function updateBalance() {
    document.getElementById("balance").innerText = `Current Balance: $${balance.toFixed(2)}`;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById("deposit").value);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        updateBalance();
    } else {
        alert("Please enter a Valid amount to deposit.")
    }
    document.getElementById("deposit").value = '';
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById("withdraw").value);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (balance - withdrawAmount >= 1000) {
            balance -= withdrawAmount;
            updateBalance();
        } else {
            alert("Insufficient funds! Minimum balance of $1000.00 must be maintained.");
        }
    } else {
        alert("please enter a valid withdrawal amount.");
    }
    document.getElementById("withdraw").value = '';
}
