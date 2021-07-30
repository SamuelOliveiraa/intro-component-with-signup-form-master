var iconerror = document.querySelector('.icon-error')
var iconerror1 = document.querySelector('.icon-error1')
var iconerror2 = document.querySelector('.icon-error2')
var iconerror3 = document.querySelector('.icon-error3')
var iconerror4 = document.querySelector('.icon-error4')

var msgerror = document.querySelector('.msg-error')
var msgerror1 = document.querySelector('.msg-error1')
var msgerror2 = document.querySelector('.msg-error2')
var msgerror3 = document.querySelector('.msg-error3')
var msgerror4 = document.querySelector('.msg-error4')

var nome = document.querySelector('#name')
nome.addEventListener('blur', function(){
    if(nome.value == ""){
        nome.style.borderColor = "hsl(0, 100%, 74%)"
        iconerror1.style.display = 'block'
        msgerror1.style.display = 'block'
    }else{
        nome.style.borderColor = "hsl(246, 25%, 77%)"
        iconerror1.style.display = 'none'
        msgerror1.style.display = 'none'
    }
})
var last = document.querySelector('#lastname')
last.addEventListener('blur', function() {
    if(last.value == ""){
        last.style.borderColor = "hsl(0, 100%, 74%)"
        iconerror2.style.display = 'block'
        msgerror2.style.display = 'block'
    }else{
        last.style.borderColor = "hsl(246, 25%, 77%)"
        iconerror2.style.display = 'none'
        msgerror2.style.display = 'none'
    }
    
})
var email = document.querySelector('#email')
email.addEventListener('blur', function() {
    if(email.value == ""){
        email.style.borderColor = "hsl(0, 100%, 74%)"
        iconerror3.style.display = 'block'
        msgerror3.style.display = 'block'
    }else if(!email.checkValidity()){
        email.style.borderColor = "hsl(246, 25%, 77%)"
        iconerror3.style.display = 'block'
        msgerror3.style.display = 'block'
    }else{
        email.style.borderColor = "hsl(246, 25%, 77%)"
        iconerror3.style.display = 'none'
        msgerror3.style.display = 'none'
    }
})
var password = document.querySelector('#pass')
password.addEventListener('blur', function() {
    if(password.value == ""){
        password.style.borderColor = "hsl(0, 100%, 74%)"
        iconerror4.style.display = 'block'
        msgerror4.style.display = 'block'
    }else{
        password.style.borderColor = "hsl(246, 25%, 77%)"
        iconerror4.style.display = 'none'
        msgerror4.style.display = 'none'
    }
})

function ValidForm() {

    if(nome.value == "" || last.value == "" || email.value == "" || password.value == "" || password.value == "" && email.value == "" && last.value == "" && nome.value == ""){
        alert('Check the data and try again!!')
    }else if(!email.checkValidity()){
        alert('Check the data and try again!!')
    }else{
        alert('Thanks')
    }

    document.location.reload(true);
}