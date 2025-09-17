///identificador de form LogIn
document.getElementById("formLogin").addEventListener("submit", function (e) {
    e.preventDefault();
    validarLogin();
});

////validacion de form LogIn
function validarLogin() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/;

    // --- Email ---
    let Emailvalid = validarcampo(email, regexEmail, true, false, null, null, true)

    // --- Password ---
    let Passvalid = validarcampo(password, regexPassword, true, true, 6, 12, true)

    if (Emailvalid && Passvalid) {
        console.log("Formulario válido, enviando...");
        alert("Logeado Correctamente")
        resetform();
        return
    }
    else {
        console.log("error en el formulario")
        return
    }

}

/// Identificador del form SignUp
document.getElementById("formSignup").addEventListener("submit", function (e) {
    e.preventDefault();
    validarSignUp();
});

////validacion de form SignUp
function validarSignUp() {
    // --- Inputs ---
    const nombre_apellido = document.getElementById("nombre_apellido");
    const email = document.getElementById("email1");
    const password = document.getElementById("password1");
    const telefono = document.getElementById("telefono");
    const pais = document.getElementById("Pais");
    const alias = document.getElementById("alias");
    const img_url = document.getElementById("image_url");

    // --- Regex ---
    const regexNombre = /^[A-Za-z]{2,30}\s[A-Za-z]{2,30}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,12}$/;
    const regexTelefono = /^\+[0-9]{7,15}$/;
    const regexAlias = /^[A-Za-z0-9]{0,30}$/;
    const regexImg = /^(https?:\/\/[^\s/$.?#].[^\s]*)\.(jpg|jpeg|png|gif|webp|svg)$/i;

    // --- Validaciones ---
    let nombreValido = validarcampo(nombre_apellido, regexNombre, true, true, 4, 60, true);
    let emailValido = validarcampo(email, regexEmail, true, false, null, null, true);
    let passwordValido = validarcampo(password, regexPassword, true, true, 6, 12, true);
    let telefonoValido = validarcampo(telefono, regexTelefono, true, true, 7, 12, true);
    let paisValido = validarcampo(pais, null, true, false, null, null, false);
    let aliasValido = validarcampo(alias, regexAlias, false, true, 0, 30, true);
    let img_urlValido = validarcampo(img_url, regexImg, false, false, null, null, true);

    // --- Resultado final ---
    if (nombreValido && emailValido && passwordValido && telefonoValido &&
        paisValido && aliasValido && img_urlValido) {

        console.log("Formulario SignUp válido, enviando...");
        alert("Registro completado correctamente");
        resetform();
        return;
    } else {
        console.log("Errores en el formulario SignUp");
        return;
    }
}

////Funciones para alternar entre formularios
//Mostrar el formulario de LogIn
function mostrarLogin() {
    resetform();
    document.getElementById("formLogin").style.display = "block";
    document.getElementById("formSignup").style.display = "none";
}
//Mostrar el formulario de SignUp
function mostrarSignup() {
    resetform();
    document.getElementById("formLogin").style.display = "none";
    document.getElementById("formSignup").style.display = "block";
}

//////Funciones para los formularios
//Oculta badges
function ocultarbadges(element = document) {
    let badges = element.getElementsByClassName("badge");
    for (i = 0; i < badges.length; i++) {
        badges[i].classList.add("d-none")
    }
}
//elimina el bg-warning
function removebg(element = document) {
    if (element.parentElement) {
        let inputs = element.parentElement.getElementsByClassName("input");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].classList.replace("bg-warning-subtle", "bg-info-subtle")
        }
    } else {
        let inputs = element.getElementsByClassName("input");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].classList.replace("bg-warning-subtle", "bg-info-subtle")
        }
    }
}
//reinicia el input
function restoreInput(element = document) {
    let inputs = element.getElementsByClassName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = ""
    }
}
//Utiliza los tres mencionados arriba
function resetform() {
    ocultarbadges();
    removebg();
    restoreInput();
}

/* Futura funcion encargada de enviar datos a la DB
function finish(op) {

};*/

function campovacio(campo) {
    let vacio = false
    if (campo.value.trim() === "" || campo.value === null) {
        vacio = true;
    }
    return vacio;
}

function addbg(element = document) {
    if (element.parentElement) {
        let inputs = element.parentElement.getElementsByClassName("input");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].classList.replace("bg-info-subtle", "bg-warning-subtle")
        }
    } else {
        let inputs = element.getElementsByClassName("input");
        for (i = 0; i < inputs.length; i++) {
            inputs[i].classList.replace("bg-info-subtle", "bg-warning-subtle")
        }
    }
}

function mostrarBadge(input, clase) {
    let badges = input.parentElement.getElementsByClassName(clase);
    for (let i = 0; i < badges.length; i++) {
        badges[i].classList.remove("d-none");
    }
}

function validarcampo(campo , regex, obligatorio = false, cantidad = false, min, max, obvio = false) {
    let valid = true;
    // --- Obligatorio ---
    if (obligatorio) {
        if (campovacio(campo)) {
            addbg(campo);
            mostrarBadge(campo, "mandatory");
            valid = false;
        } else {
            removebg(campo);
            ocultarbadges(campo.parentElement, "mandatory");
        }
    }

    // --- Cantidad y Regex ---
    if (cantidad) {
        if (campo.value.trim().length < min || campo.value.trim().length > max) {
            addbg(campo);
            mostrarBadge(campo, "quantity");
            valid = false;
        } else {
            removebg(campo);
            ocultarbadges(campo.parentElement, "quantity");
        }
    }

    if (obvio) {
        if (!regex.test(campo.value.trim())) {
            addbg(campo);
            mostrarBadge(campo, "obviusly");
            valid = false;
        } else {
            removebg(campo);
            ocultarbadges(campo.parentElement, "obviusly");
        }
    }
    return valid;
}
