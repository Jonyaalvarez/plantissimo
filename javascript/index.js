
let nombre, apellido, edad, direccion;

nombre = prompt('Ingrese su nombre: ');
apellido = prompt('Ingrese su apellido: ');


if (nombre != '' && apellido != '' && nombre != null && apellido !=null) {
    confirm('Por favor verifique su nombre y apellido: ' + nombre + ' ' + apellido);
} else {
    alert('Por favor ingrese su nombre y apellido');
    console.log('El usuario no brindo su nombre y apellido');
} while (nombre == '' && apellido == '');


do {
    edad = parseInt( prompt('En esta pagina queda prohibido el ingreso de menores de edad, favor ingrese su edad:'));
} while (edad == '' || edad == null);

if (edad >= 18) {
    console.log('El usuario es mayor de edad, puede acceder a la página');
    alert('¡Bienvenid@ ' + nombre +  ' ' +  apellido + ' a Plantissimo!');
console.log(nombre + ' ' + apellido +  ' ' + 'Ingresó a Plantissimo, tiene ' + edad + ' ' + 'años');
} else { 
    console.log(nombre + apellido + 'NO puede acceder a la pagina debido a que es menor de edad');
    alert('Usted es menor de edad por lo tanto NO puede acceder a la página');
}


do {
    direccion = prompt('Ingrese su Municipio: ');
} while (direccion == '' || direccion == null);


direccion = direccion.toUpperCase();

if (direccion != 'MATANZA'){
    console.log(nombre + ' ' + apellido + ' ' + 'vive en' + ' ' + direccion);
    alert('Plantissimo tiene cobertura en el municipio de ' + direccion);
} else {
    console.log(nombre + ' ' +  apellido + 'Vive en la MATANZA');
    alert('Lamentamos informarle que no tenemos alcance en La Matanza');
}

let girasol = parseInt(50); 
const iva = (x) => x * 1.21;

function multiplicar(girasol, numero2) {
    return girasol * numero2;
}
girasol = iva(girasol);
console.log('El precio de su compra mas IVA es $' + girasol);








