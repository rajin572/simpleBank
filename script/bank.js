document.getElementById('depositeButton').addEventListener('click', function(){
    const depositeTransation =  document.getElementById('depositeTransation');
    const depositeTransationValueStr = depositeTransation.value;
    const depositeTransationValue = parseFloat(depositeTransationValueStr);
    
    if(isNaN(depositeTransationValue)){
        document.getElementById('alert').style.display = 'block'
        document.getElementById('depositeButton').disabled = true;
        document.getElementById('withdrawButton').disabled = true;
        document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
        document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
    }
    else{
        const depositeBlance = document.getElementById('deposite-blance');
        const depositeBlanceValueStr = depositeBlance.innerText;
        const depositeBlanceValue = parseFloat(depositeBlanceValueStr);
        const newDeposite = depositeBlanceValue + depositeTransationValue;
        depositeBlance.innerText = newDeposite;


        const currentBlance = document.getElementById('current-blance');
        const currentBlanceValueStr = currentBlance.innerText;
        const currentBlanceValue = parseFloat(currentBlanceValueStr);
        const newBlance = currentBlanceValue + depositeTransationValue;
        currentBlance.innerText = newBlance;
        // console.log(newDeposite);

    }
    
    depositeTransation.value = '';
})





document.getElementById('withdrawButton').addEventListener('click', function(){
    const withdrawTransation =  document.getElementById('withdrawTransation');
    const withdrawTransationValueStr = withdrawTransation.value;
    const withdrawTransationValue = parseFloat(withdrawTransationValueStr);
    
    if(isNaN(withdrawTransationValue)){
        document.getElementById('alert').style.display = 'block'
        document.getElementById('depositeButton').disabled = true;
        document.getElementById('withdrawButton').disabled = true;
        document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
        document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
    }
    else{
        const withdrawBlance = document.getElementById('withdraw-blance');
        const withdrawBlanceValueStr = withdrawBlance.innerText;
        const withdrawBlanceValue = parseFloat(withdrawBlanceValueStr);
        const newWithdraw = withdrawBlanceValue + withdrawTransationValue;



        const currentBlance = document.getElementById('current-blance');
        const currentBlanceValueStr = currentBlance.innerText;
        const currentBlanceValue = parseFloat(currentBlanceValueStr);
        const newBlance = currentBlanceValue - withdrawTransationValue;
        if (newBlance >= 00) {
            withdrawBlance.innerText = newWithdraw;
            currentBlance.innerText = newBlance;
        }
        else{
            document.getElementById('alert2').style.display = 'block'
            document.getElementById('depositeButton').disabled = true;
            document.getElementById('withdrawButton').disabled = true;
            document.getElementById('depositeButton').style.backgroundColor = '#4a4e59';
            document.getElementById('withdrawButton').style.backgroundColor = '#4a4e59';
        }
        // currentBlance.innerText = newBlance;        // console.log(newDeposite);

    }
    
    withdrawTransation.value = '';
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