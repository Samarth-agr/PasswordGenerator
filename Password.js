let inner = document.getElementById("password")
const LowerCaseChar = 'abcdefghijklmnopqrstuvwxyz'
const UpperCaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const Symbols = '!@#$%^&*'
let allowchar = "123456789";

function GenerateRandomPassword() {
    let length = document.getElementById("length").value
    let Lower, upper, symbol
    let password = ""

    if (document.getElementById("AllowLower").checked) {
        Lower = true;
    }
    else {
        Lower = false
    }
    if (document.getElementById("AllowUpper").checked) {
        upper = true;
    }
    else {
        upper = false
    }
    if (document.getElementById("AllowSymbols").checked) {
        symbol = true;
    }
    else {
        symbol = false
    }

    if (length <= 4) {
        inner.innerHTML = '<h2>The Length Must be atleast 4</h2>'
        return 0
    }
    allowchar += Lower ? LowerCaseChar : "";
    allowchar += upper ? UpperCaseChar : "";
    allowchar += symbol ? Symbols : "";

    if (allowchar.length == 0) {
        inner.innerHTML = '<h3>Atleast one box must be checked </h3>'
        return 0;
    }
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * allowchar.length)
        password += allowchar[random];
    }
    inner.innerHTML = `<h2>Your Generated Password : ${password}</h2>`
    return 0;
}
