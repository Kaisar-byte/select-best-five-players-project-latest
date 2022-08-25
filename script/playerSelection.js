function showPlayerName(playerName) {
    const playerNameOl = document.getElementById('fivePlayers');
    const playerNameLi = document.createElement('li');
    playerNameLi.innerText = playerName;

    playerNameOl.appendChild(playerNameLi);
    const playersElement = document.getElementById('selected-five-best');
    const LiLength = playerNameOl.childNodes.length - 1;

    if (LiLength > 5) {
        document.getElementsByTagName('button').disabled = 'true';
        playerNameOl.removeChild(playerNameLi);
    }
}