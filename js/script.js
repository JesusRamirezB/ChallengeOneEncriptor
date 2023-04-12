const textInput = document.getElementById('text-input')
const encryptButton = document.getElementById('encrypt')
const decryptButton = document.getElementById('decrypt')
const textOutput = document.getElementById('text-modified')
const copyright = document.getElementById('copyright');
const copyButton = document.getElementById('copy-button')
const currentYear = new Date().getFullYear();

copyright.innerHTML = `&copy; ${currentYear}`;

function encryptText(text) {
    let result = ''
    Array.from(text).forEach(letter => {
        switch (letter) {
            case 'e':
            case 'é':
                result += 'enter';
                break;
            case 'i':
            case 'í':
                result += 'imes';
                break;
            case 'a':
            case 'á':
                result += 'ai';
                break;
            case 'o':
            case 'ó':
                result += 'ober';
                break;
            case 'u':
            case 'ú':
                result += 'ufat';
                break;
            default:
                result += letter;
                break;
        }
    })
    return result
}

function decryptText(text) {
    let desencriptada = '';
    let i = 0;
    while (i < text.length) {
        if (text[i] === 'e' && text.slice(i, i + 5) === 'enter') {
            desencriptada += 'e';
            i += 5;
        } else if (text[i] === 'i' && text.slice(i, i + 4) === 'imes') {
            desencriptada += 'i';
            i += 4;
        } else if (text[i] === 'a' && text.slice(i, i + 2) === 'ai') {
            desencriptada += 'a';
            i += 2;
        } else if (text[i] === 'o' && text.slice(i, i + 4) === 'ober') {
            desencriptada += 'o';
            i += 4;
        } else if (text[i] === 'u' && text.slice(i, i + 4) === 'ufat') {
            desencriptada += 'u';
            i += 4;
        } else {
            desencriptada += text[i];
            i++;
        }
    }
    return desencriptada;
}

copyButton.addEventListener('click', function () {
    // const textoOculto = document.createElement('textarea')
    // textoOculto.value = textOutput.textContent
    // textOutput.appendChild(textoOculto)
    // // Selecciona y copia el contenido del elemento de texto oculto
    // textoOculto.select()
    // document.execCommand('copy')
    // // Elimina el elemento de texto oculto
    // textOutput.removeChild(textoOculto)
    // alert('El texto se ha copiado al portapapeles.')
    const text = textOutput.textContent;

    if (!text) {
        return;
    }

    navigator.clipboard.writeText(text).then(function () {
        console.log('Text copied to clipboard');
        alert('Text copied to clipboard');
    }, function () {
        console.error('Failed to copy text');
        alert('Failed to copy text');
    });

})

encryptButton.addEventListener('click', function () {
    const text = textInput.value.toLowerCase()
    textOutput.innerHTML = encryptText(text)
    console.log(text + '=>' + encryptText(text))
})
decryptButton.addEventListener('click', function () {
    const text = textInput.value.toLowerCase()
    textOutput.innerHTML = decryptText(text)
    console.log(text + '=>' + decryptText(text))
})