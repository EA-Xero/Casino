
function finish(op) {

};
function validarLogin() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;
    let valido = false;
    //Revision de Email
    //Revisar si esta vacio
    if (email.value.trim() === '') {
        email.classList.replace("bg-info-subtle", "bg-warning-subtle")
        email.parentElement.getElementsByClassName("mandatory")[0].classList.remove("d-none")
    } 
    //Revisar validez caracteres
    if(!regexEmail.test(email.value.trim())){
        email.classList.replace("bg-info-subtle", "bg-warning-subtle")
        let badges = email.parentElement.getElementsByClassName("obviusly")
        for (let index = 0; index < badges.length; index++) {
            badges[index].classList.remove("d-none")
        }
    }
    //Limpiar badges de email (exito)
    else{
        email.classList.replace("bg-warning-subtle","bg-info-subtle")
        let badgesEmail = email.parentElement.children
        for(i=1; i<badgesEmail.length; i++){
            badgesEmail.item(i).classList.add("d-none")
        }
    }

    //Revision de Password
        //Revisar si esta vacio
    if (password.value.trim() === '') {
        password.classList.replace("bg-info-subtle", "bg-warning-subtle")
        password.parentElement.getElementsByClassName("mandatory")[0].classList.remove("d-none")
    } 
    //Revisar validez de caracteres
        if(!regexPassword.test(password.value.trim())){
            password.classList.replace("bg-info-subtle", "bg-warning-subtle")
            let badges = password.parentElement.getElementsByClassName("obviusly")
            for ( i = 0; i < badges.length; i++) {
                badges[i].classList.remove("d-none");
            }
    }
    //Limpiar badges de password (exito)
    else{
        password.classList.replace("bg-warning-subtle","bg-info-subtle")
        let badgesPassword = password.parentElement.children
        for(i=1; i<badgesPassword.length; i++){
            badgesPassword.item(i).classList.add("d-none")
        }
        valido = true
    }
    return valido;
};
function validarSingUp() {

}