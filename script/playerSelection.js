let ol = 0;
let count = 0;
let li = 0;
function showPlayerName(playerName) {
    ol = document.getElementById('bestPlayersName');
    li = document.createElement('li');
    li.innerText = playerName;
    if (count < 5) {
        ol.appendChild(li);
        count++
    }
}

