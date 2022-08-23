function getInputTextFromId(elemId) {
    const elementIdOfInputText = document.getElementById(elemId);
    const stringOfElementId = elementIdOfInputText.value;
    const InputValueOfId = parseFloat(stringOfElementId);
    return InputValueOfId;
}

function setValueToInnerText(elemId, value) {
    const InnerTextElement = document.getElementById(elemId);
    InnerTextElement.innerText = value;
}

