const submit = () => {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    
    if(email.value === ""){
        inserirMsgError("emailError", "Email is required")
        email.focus()
        return
    }
        
    else if (password.value === ""){
        inserirMsgError("passwordError", "Password is required")
        password.focus()
        return
    }
    else if (!validarEmail(email.value)){
        inserirMsgError("emailError", "Invalid email")
        email.focus()
        return
    }
    alert("Login: "+ email.value + "\nSenha: " + password.value)
}

const removeMsgError = (x) => {
    document.getElementById(x).innerHTML = ""
}

const inserirMsgError = (x, msg) => {
    document.getElementById(x).innerHTML = msg
}

const onHandleChange = () => {
    validarEmail(document.getElementById("email").value) ? removeMsgError("emailError") : inserirMsgError("emailError", "Invalid email")
    
}
const validarEmail = (email) => {  
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    let telefoneRegex = /^\d{11}$/

    return emailRegex.test(email) || telefoneRegex.test(email)
}