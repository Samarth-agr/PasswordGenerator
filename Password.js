let inner = document.getElementById("password")
const LowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
const UpperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const Symbols = '!@#$%^&*'
let allowchar = "123456789";

function GenerateRandomPassword() {
    let length = document.getElementById("length").value;
    let Lower = document.getElementById("AllowLower").checked;
    let upper = document.getElementById("AllowUpper").checked;
    let symbol = document.getElementById("AllowSymbols").checked;
    let password = "";

    if (length <= 4) {
        inner.innerHTML = '<h2>The Length Must be at least 4</h2>';
        return;
    }

    let allowchar = "123456789";
    allowchar += Lower ? 'abcdefghijklmnopqrstuvwxyz' : "";
    allowchar += upper ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : "";
    allowchar += symbol ? '!@#$%^&*' : "";

    if (allowchar.length === 0) {
        inner.innerHTML = '<h3>At least one box must be checked</h3>';
        return;
    }

    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * allowchar.length);
        password += allowchar[random];
    }

    inner.innerHTML = `<h2>Your Generated Password: ${password}</h2>`;
}

