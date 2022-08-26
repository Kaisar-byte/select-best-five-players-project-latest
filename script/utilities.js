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


function setValueToInnerText(elementId, outputValue) {
    const elementID = document.getElementById(elementId);
    elementID.innerText = outputValue;
    return outputValue;
}
