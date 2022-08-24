function getInputTextFromId(elemId) {
    const elementIdOfInputText = document.getElementById(elemId);
    const stringOfElementId = elementIdOfInputText.value;
    const InputValueOfId = parseFloat(stringOfElementId);
    return InputValueOfId;
};

function getInnertextFromId(elementID) {
    const ElementID = document.getElementById(elementID)
    const InnerTextOfID = ElementID.innerText;
    return InnerTextOfID;
}

function setPlayerName(plaYer) {
    const players = document.getElementById('player-Name-Container');
    const li = document.createElement('li');
    li.innerText = plaYer.inner;
    players.appendChild(li);
}