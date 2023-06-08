//Formulario
const myForm = document.getElementById('containerForm');

const clientes = [];

myForm.addEventListener('submit', function (event) {
    Event.preventDefault();

    const nombre = document.getElementById('fname');
    const apellido = document.getElementById('lname');
    const email = document.getElementById('email');
    const telefono = document.getElementById('phone');
    const tipo = document.getElementById('buyer');
    const cliente = {};

    console.log(nombre);
    console.log(apellido);
    console.log(email);
    console.log(telefono);
    console.log(tipo);

    cliente['nombre'] = nombre;
    cliente['apellido']= apellido;
    cliente['email'] = email;
    cliente['telefono'] = telefono;
    cliente['tipo'] = tipo;

    console.log(cliente);

    clientes.push(cliente);
    console.log(cliente);
    console.log(clientes);

    containerForm.reset();
    
    console.log('event submit');
});