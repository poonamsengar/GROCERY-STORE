let searchform = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick=()=>{
    searchform.classList.toggle('active')
    shoppingcart.classList.remove('active-shoping');
    loginform.classList.remove('active-login')
    navbar.classList.remove('active-menu')
}

let shoppingcart = document.querySelector('.shopping-cart')

document.querySelector('#cart-btn').onclick= ()=>{
    shoppingcart.classList.toggle('active-shoping');
    searchform.classList.remove('active')
    loginform.classList.remove('active-login')
    navbar.classList.remove('active-menu')
    
}


let loginform =document.querySelector('.login-form')
document.querySelector('#login-btn').onclick = ()=>{
    loginform.classList.toggle('active-login')
    searchform.classList.remove('active')
    shoppingcart.classList.remove('active-shoping');
    navbar.classList.remove('active-menu')
}

let navbar =document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active-menu')
    searchform.classList.remove('active')
    shoppingcart.classList.remove('active-shoping');
    loginform.classList.remove('active-login')
}


window.onscroll = () =>{
    searchform.classList.remove('active')
    shoppingcart.classList.remove('active-shoping');
    loginform.classList.remove('active-login')
    navbar.classList.remove('active-menu')
}

