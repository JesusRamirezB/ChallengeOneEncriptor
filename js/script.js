const textInput = document.getElementById('text-input')
const encryptButton = document.getElementById('encrypt')
const decryptButton = document.getElementById('decrypt')
const textOutput = document.getElementById('text-modified')
const copyright = document.getElementById("copyright");
const caracters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' '];
const currentYear = new Date().getFullYear();

copyright.innerHTML = `&copy; ${currentYear}`;

function encryptText(text) {
    let result = ''
    Array.from(text).forEach(letter => {
        if (letter == '\n') {
            result += '<br>'
        } else {
            result += caracters[(caracters.indexOf(letter.toUpperCase()) + 10) % caracters.length]
        }
    })
    return result
}

function decryptText(text) {
    let result = ''
    Array.from(text).forEach(letter => {
        if (letter == '\n') {
            result += '<br>'
        } else {
            result += caracters[(caracters.indexOf(letter.toUpperCase()) + caracters.length - 10) % caracters.length]
        }
    })
    return result
}

encryptButton.addEventListener("click", function () {
    const text = textInput.value
    textOutput.innerHTML = encryptText(text)
    console.log(text + '=>' + encryptText(text))
})
decryptButton.addEventListener("click", function () {
    const text = textInput.value
    textOutput.innerHTML = decryptText(text)
    console.log(text + '=>' + decryptText(text))
})