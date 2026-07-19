const form = document.getElementById("form");

form.addEventListener("submit", formValidation);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!^()%*#?&])[A-Za-z\d@$!^()%*#?&]{8,}$/;


function formValidation(e) {
    e.preventDefault();

    let isValid = true;

    const fNameInput = document.getElementById("first-name");
    const fNameError = document.getElementById("fname-missing");

    const fName = fNameInput.value.trim();
    const LNameInput = document.getElementById("last-name");
    const LNameError = document.getElementById("lname-missing");

    const LName = LNameInput.value.trim();
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-missing");
    const email = emailInput.value.trim();

    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-missing");
    const password = passwordInput.value.trim();

    const confirmPasswordInput = document.getElementById("confirm-password");
    const confirmPasswordError = document.getElementById("passConfirm-missing");
    const confirmPassword = confirmPasswordInput.value.trim();

    const showPasswordButton = document.getElementById("show-password");


    if (fName === "" || LName === "" || email === "" || password === "" || confirmPassword === "") {
        isValid = false;
        if (fName === "") {
            fNameError.classList.add("alert");
        }
        if (LName === "") {
            LNameError.classList.add("alert");
        }

        if (email === "") {
            emailError.classList.add("alert");
        }
        if (password === "") {
            passwordError.classList.add("alert");
        }
        if (confirmPassword === "") {
            confirmPasswordError.classList.add("alert");
        }


        setTimeout(() => {
            fNameError.classList.remove("alert");
            LNameError.classList.remove("alert");
            emailError.classList.remove("alert");
            passwordError.classList.remove("alert");
            confirmPasswordError.classList.remove("alert");
        }, 4000);

        return;
    }

    if (!emailRegex.test(email)) {
        isValid = false;
        emailError.textContent = "Please enter a valid email address";
        emailError.classList.add("alert");
        setTimeout(() => {
            emailError.classList.remove("alert");
            emailError.textContent = "Email is required";
        }, 4000);
    }

    if (!passwordRegex.test(password)) {
        isValid = false;
        passwordError.textContent = "Weak Password";
        passwordError.classList.add("alert");

        setTimeout(() => {
            passwordError.classList.remove("alert");
            passwordError.textContent = "Password is required";
        }, 4000);
    }

    if (password !== confirmPassword) {
        isValid = false;
        confirmPasswordError.textContent = "Passwords do not match";
        confirmPasswordError.classList.add("alert");
        setTimeout(() => {
            confirmPasswordError.classList.remove("alert");
            confirmPasswordError.textContent = "Confirm Password is required";
        }, 4000);
    }

    if (!isValid) {
        return;
    }

    // Form is valid, proceed with submission
    console.log("Form is valid. Submitting the form...");

    const formData = {
        firstName: fName,
        lastName: LName,
        email: email,
        password: password,
    };

    console.log("Form Data:", formData);

    localStorage.setItem("formData", JSON.stringify(formData));

    // Show confirmation message
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.classList.add("alert");
    setTimeout(() => {
        confirmationMessage.classList.remove("alert");
    }, 4000);

}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const showPasswordButton = document.getElementById("show-password");
    const password = passwordInput.value.trim();

    if (passwordInput.type === "password") {
        if (password !== "") {
            passwordInput.type = "text";
            showPasswordButton.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
        }
    } else {
        if (password !== "") {
            passwordInput.type = "password";
            showPasswordButton.innerHTML = '<i class="fa-solid fa-eye"></i>';
        }
    }
}