document.getElementById('login-btn-a').addEventListener('click', function(){
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    if (email.endsWith('gmail.com') && password !== ''){
        window.location.href = 'bank.html';
    }
    else{
        document.getElementById('sAlart').style.display = 'flex';
        document.getElementById('login-btn-a').style.display = 'none';
    }
});
document.getElementById('sAlart').addEventListener('click', function(){
    document.getElementById('sAlart').style.display = 'none';
    document.getElementById('login-btn-a').style.display = 'inline-block';
});