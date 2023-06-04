var loginforme = document.querySelector('.login-form')


var btn = document.querySelector('.btn')
loginforme.addEventListener('submit', function(e){
    e.preventDefault()
    var gmailInput = document.querySelector('#gmail')
    var passwordInput = document.querySelector('#password')
    const data = {
        email: gmailInput.value,
        password:passwordInput.value,
    }
    if(data.password == 'sia@123'){
        alert('Congratulation User Login')
    }else{
        alert('Please Insert Correct Password')
    }

})


var newsletter = document.querySelector('#newsletter')

newsletter.addEventListener('click', function(e){
    e.preventDefault()
    var email = document.querySelector('#newsletterInput')

    if(email.value){
        alert(`Thank-you for Subscribe`);
    }
    
})
