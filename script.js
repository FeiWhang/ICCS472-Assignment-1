let isEmailValid = false;
let isFocusedOnce = false;

function onEmailFocused(emailInput) {
    if (isFocusedOnce && !isEmailValid) {
        emailInput.style.border = "1px solid rgb(216, 68, 88)";
        emailInput.style.boxShadow = "0 0 5px rgb(216, 68, 88)";
    } else {
        emailInput.style.border = "1px solid rgb(125, 182, 254)";
        emailInput.style.boxShadow = "0 0 5px rgb(125, 182, 254)";
    }

    isFocusedOnce = true;
}

function onEmailBlurred(emailInput) {
    validate(emailInput);

    if (isEmailValid) {
        emailInput.style.border = "1px solid rgb(206, 212, 218)";
        emailInput.style.boxShadow = "none";
        document.getElementsByClassName(
            "SubscribeBox__emailError"
        )[0].style.display = "none";
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
