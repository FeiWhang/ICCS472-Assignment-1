let isEmailValid = false; // whether the email is valid
let isFocusedOnce = false; // whether use already focus on input once

// when emailInput in focus
function onEmailFocused(emailInput) {
    // if already focused once and email still not valid
    // make border and shadow RED
    if (isFocusedOnce && !isEmailValid) {
        emailInput.style.border = "1px solid rgb(216, 68, 88)";
        emailInput.style.boxShadow = "0 0 5px rgb(216, 68, 88)";
        // else make it BLUE
    } else {
        emailInput.style.border = "1px solid rgb(125, 182, 254)";
        emailInput.style.boxShadow = "0 0 5px rgb(125, 182, 254)";
    }

    isFocusedOnce = true;
}

// when emailInput loses focus
function onEmailBlurred(emailInput) {
    validate(emailInput); // email validation

    // if email is valid make border original with no shadow
    // set error message display to none
    if (isEmailValid) {
        emailInput.style.border = "1px solid rgb(206, 212, 218)";
        emailInput.style.boxShadow = "none";
        document.getElementsByClassName(
            "SubscribeBox__emailError"
        )[0].style.display = "none";
        // email is not valid
        // set border to red with no shadow
        // show error message
    } else {
        emailInput.style.border = "1px solid rgb(216, 68, 88)";
        emailInput.style.boxShadow = "none";
        document.getElementsByClassName(
            "SubscribeBox__emailError"
        )[0].style.display = "block";
    }
}

function validate(emailInput) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailInput.value)) {
        console.log("Valid mail");
        isEmailValid = true;
    } else {
        isEmailValid = false;
    }
}

function onSubscribeClicked() {
    if (isEmailValid) {
        console.log("Success!");
        document.getElementsByClassName("SubscribeBox")[0].style.display =
            "none";
        document.getElementsByClassName("SuccessfulBox")[0].style.display =
            "block";
    }
    console.log("Unsuccess!");
}
