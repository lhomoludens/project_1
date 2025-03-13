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
        document.getElementById("nameError").style.color = "red"
    } else {
        document.getElementById("nameError").textContent = ""
    }
    if (emailValue === "" || emailValue === null) {
        document.getElementById("emailError").textContent = "Please provide your email."
        document.getElementById("emailError").style.color = "red"
    } else {
        document.getElementById("emailError").textContent = ""
    }
    if (msgValue === "" || msgValue === null) {
        document.getElementById("msgError").textContent = "Please provide a message."
        document.getElementById("msgError").style.color = "red"
    } else {
        document.getElementById("msgError").textContent = ""
    }

    if (msgValue === "" || nameValue === "" || emailValue === "") {
        isFormValid = false
    } else {
        isFormValid = true
    }
}


const submitForm = () => {
    getContactData()
    validateFormData()
    if ( isFormValid === false) return 
    alert("Your message has been sent")

}

const bookNowButton = document.querySelector(".button");

bookNowButton.addEventListener("mouseover", () => {
    bookNowButton.style.backgroundColor = "#ffcc00"; // Change color on hover
});

bookNowButton.addEventListener("mouseout", () => {
    bookNowButton.style.backgroundColor = ""; // Revert color when mouse leaves
});

bookNowButton.addEventListener("mousedown", () => {
    bookNowButton.textContent = "Booking..."; // Change text on click
});

bookNowButton.addEventListener("mouseup", () => {
    bookNowButton.textContent = "Book Now!"; // Revert text after releasing click
});
