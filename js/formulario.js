const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Arrobas y simbolos.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch(e.target.name) { //Obtiene el name de html
        case 'nombre':
            if(expresiones.nombre.test(e.target.value)) { //e.target.value: acceder al valor en el input
                document.getElementById('grupo__input').classList.remove('formulario__grupo-incorrecto')
                document.getElementById('grupo__input').classList.add('formulario__grupo-correcto')
                document.querySelector('#grupo__user i').classList.add('fa-circle-check')
                document.querySelector('#grupo__user i').classList.remove('fa-circle-xmark')
                document.querySelector('.formulario__grupo .formulario__parrafo-error').classList.remove('formulario__parrafo-error-activo')
            } else {
                document.getElementById('grupo__input').classList.add('formulario__grupo-incorrecto')
                document.getElementById('grupo__input').classList.remove('formulario__grupo-correcto')
                document.querySelector('#grupo__user i').classList.add('fa-circle-xmark')
                document.querySelector('#grupo__user i').classList.remove('fa-circle-check')
                document.querySelector('.formulario__grupo .formulario__parrafo-error').classList.add('formulario__parrafo-error-activo')
            }
        break
        case 'apellido':
            
        break
        case 'email':
        
        break
        case 'telefono':
        
        break
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //Comprobando si presiono el boton
})