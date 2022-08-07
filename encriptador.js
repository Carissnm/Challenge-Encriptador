const texto = document.querySelector('#mensaje');
const btnEncriptar = document.querySelector('.btn-encriptar');
const display = document.querySelector('.display');
const btnDesencriptar = document.querySelector('.btn-desencriptar');
const btnCopiar = document.querySelector('.copiar-texto');
const btnBorrar = document.querySelector('.borrar-texto')

texto.focus();

console.log(texto.value)


// FUNCIONES
function encriptarMensaje() {
    if(/[A-ZÀ-ú]/.test(texto.value)) {
        texto.classList = 'borde-rojo';
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/warning-icon-png-2775.png" alt="candado cerrado no ingrese mayusculas ni minusculas">
        <h2 class="error">Error</h2>
        <p>Ingresa sólo texto en minúsculas y sin acentos por favor.</p>`
        limpiarMensajeError()
    } else {
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
    
}

function limpiarMensajeError() {
    setTimeout( limpiarDisplay , 3500 )
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
    if(texto.classList.contains('borde-rojo')) {
        texto.classList.remove('borde-rojo');
    }
}

function descifrarEncriptado() {
    if(/[A-ZÀ-ú]/.test(texto.value)) {
        texto.classList = 'borde-rojo';
        display.innerHTML = `<div class="nomessage">
        <img class="img-nomessage" src="./multimedia/warning-icon-png-2775.png" alt="candado cerrado no ingrese mayusculas ni minusculas">
        <h2 class="error">Error</h2>
        <p>Ingresa sólo texto en minúsculas y sin acentos por favor.</p>`
        limpiarMensajeError()
    } else {
        let encriptado = texto.value;
        if(encriptado == '') {
            display.innerHTML = `<div class="nomessage">
            <img class="img-nomessage" src="./multimedia/cyber-security-g0ff8d1ba3_1280.png" alt="candado cerrado mensaje no encontrado">
            <h2 class="error">No se encontró ningún mensaje</h2>
            <p>Ingresá el texto que deseás desencriptar.</p>
            </div>`
            limpiarMensajeError();
        } else {
            texto.value = encriptado.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
            display.innerHTML = `
                            <div class="encripted-message">
                                <p class="texto-encriptado">${texto.value}</p>
                            </div>`
            texto.focus();
            texto.value = '';
        }
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