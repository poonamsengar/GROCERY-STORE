var loginforme = document.querySelector('.login-form')


var btn = document.querySelector('.btn')
loginforme.addEventListener('submit', function(e){
    e.preventDefault()
    var gmailInput = document.querySelector('#gmail')
    var passwordInput = document.querySelector('#password')
    var accoutCreate = document.querySelector('#confim-password')
    const data = {
        email: gmailInput.value,
        password:passwordInput.value,
        create :accoutCreate.value,
    }
    if(data.password == 'sia@123'){
        if(data.create == 'sia@123'){
            alert('Congratulation Create User account🎊')
    }
}
else{
    alert('Invalid User Name or Password')
}

})
