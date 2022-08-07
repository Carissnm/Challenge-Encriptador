const texto = document.querySelector('#mensaje');
const btnEncriptar = document.querySelector('.btn-encriptar');
const display = document.querySelector('.display');
const btnDesencriptar = document.querySelector('.btn-desencriptar');



texto.focus();


// FUNCIONES
function encriptarMensaje() {
    if(texto.value === '') {
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/cyber-security-g0ff8d1ba3_1280.png" alt="candado cerrado mensaje no encontrado">
        <h2 class="error">No se encontró ningún mensaje</h2>
        <p>Ingresá el texto que deseás encriptar o desencriptar.</p>
    </div>`
    } else {
        const textoIngresado = texto.value.split('').map(item => {
            switch(item) {
                case 'a' :
                    return 'ai';
                    break;
                case 'e' :
                    return 'enter';
                    break;
                case 'i' :
                    return 'imes';
                    break;
                case 'o' :
                    return 'ober';
                    break;
                case 'u' :
                    return 'ufat';
                    break;
                default :
                    return item;
                    break
            }
        })
        const textoEncriptado = textoIngresado.join('')
        display.innerHTML = `
                    <div class="encripted-message">
                        <p class="texto-encriptado">${textoEncriptado}</p>
                        <button class="copiar-texto">Copiar</button>
                    </div>`
        const parrafo = document.querySelector('.texto-encriptado');
        const btnCopiar = document.querySelector('.copiar-texto');
        btnCopiar.onclick = copiarMensaje ;
            texto.focus();
            texto.value = '';
            mensajeObj.isEncriptado = true;  
    }    
}

function copiarMensaje() {
    const mensajeCopiado = display.firstElementChild.firstElementChild.textContent;
    texto.value = mensajeCopiado;
    display.firstElementChild.firstElementChild.remove()
}

function limpiarDisplay() {
    display.firstElementChild.remove(parrafo)
}

function descifrarEncriptado() {
    let encriptado = texto.value;
    if(encriptado == '') {
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/cyber-security-g0ff8d1ba3_1280.png" alt="candado cerrado mensaje no encontrado">
        <h2 class="error">No se encontró ningún mensaje</h2>
        <p>Ingresá el texto que deseás encriptar o desencriptar.</p>
        </div>`
    } else {
        let desencriptadoA = encriptado.replace(/ai/g, 'a');
        let desencriptadoE = desencriptadoA.replace(/enter/g, 'e');
        let desencriptadoI = desencriptadoE.replace(/imes/g, 'i');
        let desencriptadoO = desencriptadoI.replace(/ober/g, 'o');
        let desencriptadoU = desencriptadoO.replace(/ufat/g, 'u');
        display.innerHTML = `
                        <div class="encripted-message">
                            <p class="texto-encriptado">${desencriptadoU}</p>
                            <button class="copiar-texto">Copiar</button>
                        </div>`
        const btnCopiar = document.querySelector('.copiar-texto');
        btnCopiar.onclick = copiarMensaje ;
        texto.focus();
        texto.value = '';
    }

    
    
}


//EVENTLISTENERS
document.addEventListener('DOMContentLoaded', () => {
    texto.value = '';
});

btnEncriptar.onclick = encriptarMensaje ;
btnDesencriptar.onclick = descifrarEncriptado ;