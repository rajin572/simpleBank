function getValueFromInput(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    // document.getElementById(inputId).value = ''
    // inputField.value = ''
    return inputFieldValue;
}
function getTextFromElement(elementId){
    const textField = document.getElementById(elementId);
    const textFieldValueStr = textField.innerText;
    const textFieldValue = parseFloat(textFieldValueStr);
    return textFieldValue;
}
function setAmount(elementId, newAmount){
    const textField = document.getElementById(elementId);
    textField.innerText = newAmount
}
document.getElementById('depositeButton').addEventListener('click', function(){
    if(isNaN(getValueFromInput('depositeTransation'))){
        document.getElementById('alert').style.display = 'block'
        document.getElementById('depositeButton').disabled = true;
        document.getElementById('withdrawButton').disabled = true;
        document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
        document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
    }
    else{
    const depositeInputAmount = getValueFromInput('depositeTransation')
    const depositeElementAmount = getTextFromElement('deposite-blance')
    const newDepositAmount = depositeElementAmount + depositeInputAmount;
    setAmount('deposite-blance',newDepositAmount)
    const curentElementAmount = getTextFromElement('current-blance')
    const newCurentAmount = curentElementAmount + depositeInputAmount;
    setAmount('current-blance',newCurentAmount)

    document.getElementById('depositeTransation').value = '';
    }
    // const depositeInputAmount = getValueFromInput('depositeTransation')
    // const depositeElementAmount = getTextFromElement('deposite-blance')
    // const newDepositAmount = depositeElementAmount + depositeInputAmount;
    // setAmount('deposite-blance',newDepositAmount)
    // const curentElementAmount = getTextFromElement('current-blance')
    // const newCurentAmount = curentElementAmount + depositeInputAmount;
    // setAmount('current-blance',newCurentAmount)
})
document.getElementById('withdrawButton').addEventListener('click', function(){
    if(isNaN(getValueFromInput('withdrawTransation'))){
        document.getElementById('alert').style.display = 'block'
        document.getElementById('depositeButton').disabled = true;
        document.getElementById('withdrawButton').disabled = true;
        document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
        document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
    }
    else{
        const withdrawAmount = getValueFromInput('withdrawTransation')
        const withdrawElementAmount =  getTextFromElement('withdraw-blance')
        const newWithdrawElementAmount = withdrawElementAmount + withdrawAmount;
        const curentElementAmount =  getTextFromElement('current-blance')
        const newCurentElementAmount = curentElementAmount - withdrawAmount;
        if(withdrawAmount > curentElementAmount){
            document.getElementById('alert2').style.display = 'block'
            document.getElementById('depositeButton').disabled = true;
            document.getElementById('withdrawButton').disabled = true;
            document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
            document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
        }
        else{
            setAmount('withdraw-blance', newWithdrawElementAmount)
            setAmount('current-blance', newCurentElementAmount)
        }
        document.getElementById('withdrawTransation').value = '';
    }

    // const withdrawAmount = getValueFromInput('withdrawTransation')
    // const withdrawElementAmount =  getTextFromElement('withdraw-blance')
    // const newWithdrawElementAmount = withdrawElementAmount + withdrawAmount;
    // const curentElementAmount =  getTextFromElement('current-blance')
    // const newCurentElementAmount = curentElementAmount - withdrawAmount;
    // if(withdrawAmount > curentElementAmount){
    //     document.getElementById('alert2').style.display = 'block'
    //     document.getElementById('depositeButton').disabled = true;
    //     document.getElementById('withdrawButton').disabled = true;
    //     document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
    //     document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
    // }
    // else{
    //     setAmount('withdraw-blance', newWithdrawElementAmount)
    //     setAmount('current-blance', newCurentElementAmount)
    // }
})

document.getElementById('alert-off').addEventListener('click', function(){
    document.getElementById('alert').style.display = 'none'
    document.getElementById('depositeButton').disabled = false;
    document.getElementById('withdrawButton').disabled = false;
    document.getElementById('depositeButton').style.backgroundColor = '#0e49fb';
    document.getElementById('withdrawButton').style.backgroundColor = '#0e49fb';
})
document.getElementById('alert-off2').addEventListener('click', function(){
    document.getElementById('alert2').style.display = 'none'
    document.getElementById('depositeButton').disabled = false;
    document.getElementById('withdrawButton').disabled = false;
    document.getElementById('depositeButton').style.backgroundColor = '#0e49fb';
    document.getElementById('withdrawButton').style.backgroundColor = '#0e49fb';
})

document.getElementById('logout').addEventListener('click', function(){
    window.location.href = 'index.html';
})