function setPlayerName(plaYer) {
    const players = document.getElementById('player-Name-Container');
    const li = document.createElement('li');
    li.innerText = plaYer;
    players.appendChild(li);
}

document.getElementById('btn-messi').addEventListener('click', function () {
    if (document.getElementById('btn-messi').clicked === 1) {
        document.getElementById('btn-messi').setAttribute(this.disabled);
    } else {
        const messi = getInnertextFromId('player-name');
        setPlayerName(messi);
    }


})

const btn = document.getElementById('btn-player1');
function createList() {

    const NameOfplayer = btn.parentElement.firstElementChild.innerText;
    const mainContainer = document.getElementById('best-five-players-container');

    var ol = document.createElement('ol');
    ol.style.listStyle = "upper-alpha";
    for (let i = 0; i < 1; i++) {
        var li = document.createElement('li');
        li.innerText = NameOfplayer;
        ol.appendChild(li);
        mainContainer.appendChild(ol)
    }
}
// Player name 

function getListToBestFivePlayer() {

    if (btn.clicked === true) {
        btn.style.disabled = true;
    } else {
        createList();
    }
}