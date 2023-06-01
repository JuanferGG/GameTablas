//! Variables HTML
const btnGameTable = document.getElementsByClassName('btnGameTable')
const btnGameCantidad = document.getElementsByClassName('btnGameCantidad')
const valor1 = document.getElementById('valor1')
const valor2 = document.getElementById('valor2')
const inputRespuesta = document.getElementById('inputRespuesta')
const mensaje = document.getElementById('mensaje')

//! Btns Game
const nuevo = document.getElementById('nuevo')
const comprobar = document.getElementById('comprobar')
const verRespuesta = document.getElementById('verRespuesta')


//! Variables Game
let tablaMulti = Math.floor(Math.random() * 10)
let multiplicado = Math.floor(Math.random() * 10)
let resultadoCorrecto
let cantDecimales = 1

//* Insert Values
valor1.textContent = multiplicado
valor2.textContent = tablaMulti

resultadoCorrecto = tablaMulti * multiplicado

for(let i = 0; i < btnGameTable.length; i++){
    btnGameTable[i].addEventListener('click', () => {
        valor2.textContent = btnGameTable[i].textContent
        tablaMulti = parseInt(btnGameTable[i].textContent)

        resultadoCorrecto = tablaMulti * multiplicado
        console.log(resultadoCorrecto)
    })

    
}
for(let i = 0; i < btnGameCantidad.length; i++){
    btnGameCantidad[i].addEventListener('click', () => {
        cantDecimales = parseInt(btnGameCantidad[i].textContent)
        if(cantDecimales == 1){
            multiplicado = parseInt(Math.floor(Math.random() * 10))
            valor1.textContent = multiplicado
        }
        if(cantDecimales == 2){
            multiplicado = parseInt(Math.floor(Math.random() * 100))
            valor1.textContent = multiplicado
        }
        if(cantDecimales == 3){
            multiplicado = parseInt(Math.floor(Math.random() * 1000))
            valor1.textContent = multiplicado
        }
        if(cantDecimales == 4){
            multiplicado = parseInt(Math.floor(Math.random() * 10000))
            valor1.textContent = multiplicado
        }
        
        resultadoCorrecto = tablaMulti * multiplicado
        console.log(resultadoCorrecto)
    })
}

document.addEventListener('keyup', (e) => {
    if(e.keyCode == 13){
        if(inputRespuesta.value == ''){
            alert('ingrese un numero')
        } else {
            if(inputRespuesta.value == resultadoCorrecto){
                inputRespuesta.style.backgroundColor = 'green'
                mensaje.style.color = 'green'
                mensaje.textContent = 'Respuesta Correcta'
            } else {
                inputRespuesta.style.backgroundColor = 'red'
                mensaje.style.color = 'red'
                mensaje.textContent = 'Respuesta Incorrecta'
            }
        }
    }
})

nuevo.addEventListener('click', () => {
    mensaje.style.color = 'red'
    mensaje.textContent = ''
    inputRespuesta.style.backgroundColor = 'transparent'
    inputRespuesta.value = ''
    if(cantDecimales == 1){
        multiplicado = parseInt(Math.floor(Math.random() * 10))
        valor1.textContent = multiplicado
    }
    if(cantDecimales == 2){
        multiplicado = parseInt(Math.floor(Math.random() * 100))
        valor1.textContent = multiplicado
    }
    if(cantDecimales == 3){
        multiplicado = parseInt(Math.floor(Math.random() * 1000))
        valor1.textContent = multiplicado
    }
    if(cantDecimales == 4){
        multiplicado = parseInt(Math.floor(Math.random() * 10000))
        valor1.textContent = multiplicado
    }
    
    resultadoCorrecto = tablaMulti * multiplicado
    console.log(resultadoCorrecto)
})
comprobar.addEventListener('click', () => {
    if(inputRespuesta.value == ''){
        alert('ingrese un numero')
    } else {
        if(inputRespuesta.value == resultadoCorrecto){
            inputRespuesta.style.backgroundColor = 'green'
            mensaje.style.color = 'green'
            mensaje.textContent = 'Respuesta Correcta'
        } else {
            inputRespuesta.style.backgroundColor = 'red'
            mensaje.style.color = 'red'
            mensaje.textContent = 'Respuesta Incorrecta'
        }
    }
})
verRespuesta.addEventListener('click', () => {
    inputRespuesta.value = resultadoCorrecto
})