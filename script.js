// Registration Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let valid = true;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name required";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email required";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passError").innerHTML = "Password required";
        valid = false;
    }

    if (valid) {
        window.location.href = "home.html";
    }

    return false;
}

// Quotes
let quotes = [
"You can't bring back what you've lost, think about what you have now! - Jinbei",
"Never give up without even trying. - Naruto",
"Fear is not evil. It tells you what your weakness is. - Gildarts",
"If you don’t take risks, you can’t create a future. - Luffy"
];

function newQuote() {
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

window.onload = function () {
    if (document.getElementById("quote")) {
        newQuote();
    }
};
