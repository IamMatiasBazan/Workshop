const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Arrobas y simbolos.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch(e.target.name) { //Obtiene el name de html
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'user')
        break
        case 'apellido':
            validarCampo(expresiones.apellido, e.target, 'apellido')
        break
        case 'email':
            validarCampo(expresiones.email, e.target, 'email')
        break
        case 'telefono':
            validarCampo(expresiones.telefono, e.target, 'telefono')
        break
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)) { //e.target.value: acceder al valor en el input
        document.getElementById('grupo__input').classList.remove('formulario__grupo-incorrecto')
        document.getElementById('grupo__input').classList.add('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark')
        document.querySelector('.formulario__grupo .formulario__parrafo-error').classList.remove('formulario__parrafo-error-activo')
    } else {
        document.getElementById('grupo__input').classList.add('formulario__grupo-incorrecto')
        document.getElementById('grupo__input').classList.remove('formulario__grupo-correcto')
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark')
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check')
        document.querySelector('.formulario__grupo .formulario__parrafo-error').classList.add('formulario__parrafo-error-activo')
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Comprobando si presiono el boton
})