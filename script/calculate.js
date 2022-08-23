document.getElementById('btn-calculate').addEventListener('click', function () {
    const wagesOfPerPlayer = getInputTextFromId('per-player-input');
    const totalPlayer = 5;
    const playerTotalPrice = wagesOfPerPlayer * totalPlayer;
    setValueToInnerText('player-total-price', playerTotalPrice);
})



