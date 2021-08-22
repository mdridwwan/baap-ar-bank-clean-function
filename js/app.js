function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputText = inputField.value;
    const valueNum = parseFloat(inputText);
    inputField.value = '';
    return valueNum
}

function updateTotal(fieldId, amount) {
    const fieldValue = document.getElementById(fieldId);
    const fieldText = fieldValue.innerText;
    const perviousTotalNum = parseFloat(fieldText);
    const perviousTotal = perviousTotalNum + amount;
    fieldValue.innerText = perviousTotal;
}

// total balance
function updateBalance(amount, isAdd) {
    const balanceTag = document.getElementById('balance-view');
    const balanceInText = balanceTag.innerText;
    const previousBalance = parseFloat(balanceInText);
    if (isAdd == true) {
        const updateBalance = previousBalance + amount;
        balanceTag.innerText = updateBalance;
    } else if (isAdd == false) {
        const updateBalance = previousBalance - amount;
        balanceTag.innerText = updateBalance;
    }
}

document.getElementById('withdraw-btn').addEventListener('click', function() {
    const valueNum = getInputValue('withdraw-input');
    if (valueNum > 0) {
        updateTotal('withdraw-view', valueNum);
        updateBalance(valueNum, false);
    }

})
document.getElementById('deposit-btn').addEventListener('click', function() {
    const valueNum = getInputValue('deposit-input');
    if (valueNum > 0) {
        updateTotal('deposit-view', valueNum);
        updateBalance(valueNum, true);
    }
})