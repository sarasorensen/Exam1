//Menu for media queries
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", function () {
    navbarLinks.classList.toggle("active");
})

var contactForm = document.getElementById("contactForm");
var message = document.getElementById("message");

//Functions validating input
function validateName(name) {
    if (name.trim().length === 0) {
        return false;
    }
    return true;
}

function validateLastName(lName) {
    if (lName.trim().length === 0) {
        return false;
    }
    return true;
}

function validatePhone(phone) {
    if (
        phone.search(/^(\+{1}\d{2,3}\s?[(]{1}\d{1,3}[)]{1}\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}$/)
    ) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (email.search(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
        return false;
    }
    return true;
}

function validateDetails(details) {
    if (details == null || details == "") {
        return false;
    } return true;
}
//Function for submitting contact form
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let validationPassed = true;

    // error message
    const firstNameError = document.getElementById("firstNameError");
    const lastNameError = document.getElementById("lastNameError");
    const messageError = document.getElementById("messageError");
    const phoneError = document.getElementById("phoneError");
    const emailError = document.getElementById("emailError");

    // Inputs
    const name = document.getElementById("firstName");
    const lName = document.getElementById("lastName");
    const details = document.getElementById("details");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    const nameValue = name.value;
    const lNameValue = lName.value;
    const detailsValue = details.value;
    const phoneValue = phone.value;
    const emailValue = email.value;

    //Checks input and error display
    if (validateName(nameValue)) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
        validationPassed = false;
    }
    if (validateLastName(lNameValue)) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
        validationPassed = false;
    }
    if (validatePhone(phoneValue)) {
        phoneError.style.display = "none";
    } else {
        phoneError.style.display = "block";
        validationPassed = false;
    }
    if (validateDetails(detailsValue)) {
        messageError.style.display = "none";
    } else {
        messageError.style.display = "block";
        validationPassed = false;
    }
    if (validateEmail(emailValue)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        validationPassed = false;
    }
    if (validationPassed) {
        var pMessage = document.getElementById("validation-passed-message");
        document.getElementById("validation-passed-message").style.display =
            "block";
        var pMessage = document.getElementById("validation-false");
        document.getElementById("validation-false").style.display = "none";
    } else {
        var pMessage = document.getElementById("validation-false");
        document.getElementById("validation-false").style.display = "block";

        var pMessage = document.getElementById("validation-passed-message");
        document.getElementById("validation-passed-message").style.display = "none";
        validationPassed = false;
    }
});

//show and hide toggle function
function toggle() {
    var moreInfoBox = document.getElementById("moreInfoContent");
    if (moreInfoBox.style.display === "none") {
        moreInfoBox.style.display = "block";
    } else {
        moreInfoBox.style.display = "none";
    }
}
//Back to top button
document.getElementById("topButton").addEventListener("click", topButtonFunction);

function topButtonFunction() {
    let body = document.body;
    let html = document.documentElement;
    body.scrollTop = 0;
    html.scrollTop = 0;
}


