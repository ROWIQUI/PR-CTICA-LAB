function validarNombre() {
    let valid = true;
    const inputName = document.getElementById("input-name");
    const textoError = document.getElementById("error-name");

    if (inputName.validity.patternMismatch) {
        textoError.innerText = "El texto solo puede incluir letras mayúsculas y minúsculas";
        inputName.style.backgroundImage = "url('images/error-icon.svg')";
        inputName.style.borderColor = "red";
    } else if (inputName.validity.valueMissing) {
        textoError.innerText = "Rellene este campo";
        inputName.style.backgroundImage = "url('images/error-icon.svg')";
        inputName.style.borderColor = "red";
    } else {
        textoError.innerText = "";
        inputName.style.backgroundImage = "url('images/success-icon.svg')";
        inputName.style.borderColor = "green";
    }
    return valid;
};
function validarEmail() {
    let valid = true;
    const inputMail = document.getElementById("input-email");
    const emailError = document.getElementById("error-email");
    if (inputMail.validity.patternMismatch) {
        emailError.innerText = "Email inválido";
        inputMail.style.backgroundImage = "url('images/error-icon.svg')";
        inputMail.style.borderColor = "red";
        valid = false;
    } else if (inputMail.validity.valueMissing) {
        emailError.innerText = "Rellene este campo";
        inputMail.style.backgroundImage = "url('images/error-icon.svg')";
        inputMail.style.borderColor = "red";
        valid = false;
    } else {
        emailError.innerText = "";
        inputMail.style.backgroundImage = "url('images/success-icon.svg')";
        inputMail.style.borderColor = "green";
    }
    return valid;
};
function validarContrasena() {
    let valid = true;
    const inputContrasena = document.getElementById("input-clave");
    const claveError = document.getElementById("error-clave");
    const inputConfirmation = document.getElementById("input-confirmation");
    const contrasenaError = document.getElementById("error-contrasena");
    if (inputContrasena.value.length > 8) {
        claveError.innerText = "No debe tener más de 8 caracteres";
        inputContrasena.style.backgroundImage = "url('images/error-icon.svg')";
        inputContrasena.style.borderColor = "red";
        valid = false;
    } else if (inputContrasena.validity.valueMissing) {
        claveError.innerText = "Rellene este campo";
        inputContrasena.style.backgroundImage = "url('images/error-icon.svg')";
        inputContrasena.style.borderColor = "red";
        valid = false;
    } else {
        claveError.innerText = "";
        inputContrasena.style.backgroundImage = "url('images/success-icon.svg')";
        inputContrasena.style.borderColor = "green";
    }
    if (inputConfirmation.value != inputContrasena.value) {
        contrasenaError.innerText = "Las contraseñas no coinciden";
        inputConfirmation.style.backgroundImage = "url('images/error-icon.svg')";
        inputConfirmation.style.borderColor = "red";
        valid = false;
    } else if (inputConfirmation.validity.valueMissing) {
        contrasenaError.innerText = "Rellene este campo";
        inputConfirmation.style.backgroundImage = "url('images/error-icon.svg')";
        inputConfirmation.style.borderColor = "red";
        valid = false;
    } else {
        contrasenaError.innerText = "";
        inputConfirmation.style.backgroundImage = "url('images/success-icon.svg')";
        inputConfirmation.style.borderColor = "green";
    }
    return valid;
};
function validarBoton() {
    const listaFunciones = [validarNombre(), validarEmail(), validarContrasena()];
    let valid = true;
    for (let index = 0; index < listaFunciones.length; index++) {
        const value = listaFunciones[index];
        if (!value) {
            valid = value;
        }
    }
    if (valid) {
        window.alert("La inscripción ha sido correcta");
    }
};