let nameValue;
let emailValue;
let msgValue;
let isFormValid = false


const getContactData = () => {
    nameValue = document.getElementById("name").value
    emailValue = document.getElementById("email").value
    msgValue = document.getElementById("msg").value
}

const validateFormData = () => {
    if (nameValue === "" || nameValue === null) {
        document.getElementById("nameError").textContent = "Please provide your name."
    }
    if (emailValue === "" || emailValue === null) {
        document.getElementById("emailError").textContent = "Please provide your email."
    }
    if (msgValue === "" || msgValue === null) {
        document.getElementById("msgError").textContent = "Please provide a message."
    }

    if (msgValue === "" || nameValue === "" || emailValue === "") {
        isFormValid = false
    } else {
        isFormValid = true
    }
}


const submitForm = () => {
    if ( isFormValid === false) { return }

}