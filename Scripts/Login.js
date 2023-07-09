// var loginforme = document.querySelector('.login-form')


// var btn = document.querySelector('.btn')
// loginforme.addEventListener('submit', function(e){
//     e.preventDefault()
//     var gmailInput = document.querySelector('#gmail')
//     var passwordInput = document.querySelector('#password')
//     const data = {
//         email: gmailInput.value,
//         password:passwordInput.value,
//     }
//     if(data.password == 'sia@123'){
//         alert('Congratulation User Login')
//     }else{
//         alert('Please Insert Correct Password')
//     }

// })


// var newsletter = document.querySelector('#newsletter')

// newsletter.addEventListener('click', function(e){
//     e.preventDefault()
//     var email = document.querySelector('#newsletterInput')

//     if(email.value){
//         alert(`Thank-you for Subscribe`);
//     }
    
// })


window.onload = async () => {
    await configureClient();
  
    // NEW - update the UI state
    updateUI();
  };
  
  // NEW
  const updateUI = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();
  
    document.getElementById("btn-logout").disabled = !isAuthenticated;
    document.getElementById("btn-login").disabled = isAuthenticated;
  };
  const login = async () => {
    await auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    });
  };

  window.onload = async () => {

    // .. code ommited for brevity
  
    updateUI();
  
    const isAuthenticated = await auth0Client.isAuthenticated();
  
    if (isAuthenticated) {
      // show the gated content
      return;
    }
  
    // NEW - check for the code and state parameters
    const query = window.location.search;
    if (query.includes("code=") && query.includes("state=")) {
  
      // Process the login state
      await auth0Client.handleRedirectCallback();
      
      updateUI();
  
      // Use replaceState to redirect the user away and remove the querystring parameters
      window.history.replaceState({}, document.title, "/");
    }
  };

  const logout = () => {
    auth0Client.logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  };