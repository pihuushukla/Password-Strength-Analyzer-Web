console.log("JavaScript Connected Successfully!");

const password = document.getElementById("password");
const button = document.getElementById("analyzeBtn");
const generate = document.getElementById("generateBtn");
const text = document.getElementById("strengthText");
const fill = document.getElementById("strengthFill");
const eye = document.getElementById("eye");
const suggestions = document.getElementById("suggestions");


eye.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";
        eye.innerHTML = "🙈";

    }

    else {

        password.type = "password";
        eye.innerHTML = "👁️";

    }

});

button.addEventListener("click", function () {

    let pass = password.value;
    let score = 0;

    let advice = [];


if (pass.length >= 8) {
    score++;
} else {
    advice.push("• Password should be at least 8 characters.");
}

if (/[A-Z]/.test(pass)) {
    score++;
} else {
    advice.push("• Add at least one uppercase letter.");
}


if (/[a-z]/.test(pass)) {
    score++;
} else {
    advice.push("• Add at least one lowercase letter.");
}
if (/[0-9]/.test(pass)) {
    score++;
} else {
    advice.push("• Include at least one number.");
}


if (/[!@#$%^&*(),.?":{}|<>]/.test(pass)) {
    score++;
} else {
    advice.push("• Add at least one special character.");
}


if (score <= 2) {

    text.innerHTML = "🔴 Weak Password";
    fill.style.width = "30%";
    fill.style.background = "red";
}

else if (score <= 4) {
    text.innerHTML = "🟡 Medium Password";
    fill.style.width = "70%";
    fill.style.background = "orange";

}

else {

    text.innerHTML = "🟢 Strong Password";
    fill.style.width = "100%";
    fill.style.background = "green";

}



suggestions.innerHTML = advice.join("<br>");

});
generate.addEventListener("click", function () {

    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

    let newPassword = "";

    for (let i = 0; i < 12; i++) {

        let randomIndex = Math.floor(Math.random() * characters.length);

        newPassword = newPassword + characters[randomIndex];

    }

    password.value = newPassword;

    // Automatically analyze the generated password
    button.click();

});

