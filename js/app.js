let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente() {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //Revisar si hay campos vacios
    const camposVacios = [ mesa, hora ].some( campo => campo === '' );
    
    if(camposVacios) {
        console.log('Hay al menos un campo vacío')
    } else {
        console.log('todos los campos están llenos')
    }
}