let perPlayerSalary = 0;
let playerExpense = 0;
let noOfPlayer = 0;

let managerSalary = 0;
let coachSalary = 0;
let totalField = 0;

document.getElementById('btn-calculate').addEventListener('click', function () {

    perPlayerSalary = getInputTextFromId('per-player-input');
    noOfPlayer = count;
    playerExpense = perPlayerSalary * noOfPlayer;
    const playerExpenseInAmount = setValueToInnerText('player-expense', playerExpense);
})



document.getElementById('btn-total-calculate').addEventListener('click', function () {

    managerSalary = getInputTextFromId('manager');
    coachSalary = getInputTextFromId('coach');
    totalField = playerExpense + managerSalary + coachSalary
    setValueToInnerText('grand-total', totalField);
})
