const texto = document.querySelector('#mensaje');
const btnEncriptar = document.querySelector('.btn-encriptar');
const display = document.querySelector('.display');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.copiar-texto');
const btnBorrar = document.querySelector('.borrar-texto')

texto.focus();


// FUNCIONES
function encriptarMensaje() {
    if(texto.value === '') {
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/cyber-security-g0ff8d1ba3_1280.png" alt="candado cerrado mensaje no encontrado">
        <h2 class="error">No se encontró ningún mensaje</h2>
        <p>Ingresá el texto que deseás encriptar.</p>
    </div>`
        limpiarMensajeError()
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
                    </div>`
        const parrafo = document.querySelector('.texto-encriptado');
            texto.focus();
            texto.value = '';
    }    
}

function limpiarMensajeError() {
    setTimeout( limpiarDisplay , 3000 )
}

function copiarMensaje() {
    if(display.firstElementChild === null) {
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/cyber-security-g0ff8d1ba3_1280.png" alt="candado cerrado mensaje no encontrado">
        <h2 class="error">No se encontró ningún mensaje para copiar</h2>
        </div>`
        limpiarMensajeError()
    } else {
        const mensajeCopiado = display.firstElementChild.firstElementChild.textContent;
        texto.value = mensajeCopiado;
        display.firstElementChild.firstElementChild.remove()
    }
    
    
}

function limpiarDisplay() {
    display.innerHTML = '';
}

function descifrarEncriptado() {
    let encriptado = texto.value;
    if(encriptado == '') {
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/cyber-security-g0ff8d1ba3_1280.png" alt="candado cerrado mensaje no encontrado">
        <h2 class="error">No se encontró ningún mensaje</h2>
        <p>Ingresá el texto que deseás desencriptar.</p>
        </div>`
        limpiarMensajeError();
    } else {
        let desencriptadoA = encriptado.replace(/ai/g, 'a');
        let desencriptadoE = desencriptadoA.replace(/enter/g, 'e');
        let desencriptadoI = desencriptadoE.replace(/imes/g, 'i');
        let desencriptadoO = desencriptadoI.replace(/ober/g, 'o');
        let desencriptadoU = desencriptadoO.replace(/ufat/g, 'u');
        display.innerHTML = `
                        <div class="encripted-message">
                            <p class="texto-encriptado">${desencriptadoU}</p>
                        </div>`
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
btnCopiar.onclick = copiarMensaje ;
btnBorrar.onclick = limpiarDisplay ;