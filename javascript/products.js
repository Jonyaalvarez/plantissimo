
//Objetos literales
const products = [
	{
		id: 1,
		nombre: 'Rosa',
		precio: 1000,
		img: 'rose.jpg'
	},
	{
		id: 2,
		nombre: 'Girasol',
		precio: 500,
		img: 'sunflower.jpg'
	},
	{
		id: 3,
		nombre: 'Margaritan',
		precio: 800,
		img: 'margaret.jpg'
	},
	{
		id: 4,
		nombre: 'Dalia',
		precio: 900,
		img: 'dahlia.jpg'
	},
	{
		id: 5,
		nombre: 'Gladiolo',
		precio: 2000,
		img: 'gladiolus.jpg'
	},
	{
		id: 6,
		nombre: 'Palmera',
		precio: 3000,
		img: 'palm.jpg'
	},
	{
		id: 7,
		nombre: 'Helecho',
		precio: 2500,
		img: 'fern.jpg'
	},
	{
		id: 8,
		nombre: 'Cactus',
		precio: 1500,
		img: 'cacti.jpg'
	},
	{
		id: 9,
		nombre: 'Suculenta',
		precio: 250,
		img: 'succulent.jpg'
	},
	{
		id: 10,
		nombre: 'Petunia',
		precio: 850,
		img: 'petunia.jpg'
	}
]

console.log(products);

//STORAGE
localStorage.setItem('productos', JSON.stringify(products));

const myProducts = JSON.parse(localStorage.getItem(products));
/* console.log(myProducts); */

//Ordeno alfabeticamente de forma ascendente
products.sort((a, b) => {
	if(a.nombre > b.nombre){
		return 1;
	} else if (a.nombre < b.nombre){
		return -1;
	} else {
		return 0;
	}
})

class Producto{
		constructor(imagen, nombre, precio, id)	{
			this.imagen = imagen;
			this.nombre =nombre;
			this.precio = precio;
			this.id = id;
			this.cantidad = 1;
			this.subtotal = 0;
		}

		obtenerTotal() {
			this.subtotal = this.precio * this.cantidad;
		}
}

