let nameValue;
let emailValue;
let msgValue;


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
        document.getElementById("nameError").textContent = "Please provide your email."
    }
}