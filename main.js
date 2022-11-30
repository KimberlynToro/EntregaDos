class Productos {
    constructor(id, nombre, precio, codigo) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.codigo = codigo;
    }
}

const productoJersey = new Productos(1, "Jersey", 4500, 12345);
const productoCanale = new Productos(2, "Canale", 4200, 54321);
const productoVestido = new Productos(3, "Vestido", 3800, 67890);
const productoCropped = new Productos(4, "Cropped", 3000, 09876);
const productoHalter = new Productos(5, "Halter", 2800, 01234);

const arrayProductos = [];

arrayProductos.push(productoJersey);
arrayProductos.push(productoCanale);
arrayProductos.push(productoVestido);
arrayProductos.push(productoCropped);
arrayProductos.push(productoHalter);

console.log(arrayProductos);

const pass = 1234;
let passIngresado;

do {
    passIngresado = prompt("Ingrese su contraseña");
}while(passIngresado != pass);
alert("Bienvenido a la tienda online Ashika");


function menu() { 
let opcion = parseInt(prompt("Ingrese una opción: \n 1) Ingresar producto \n 2) Modificar producto \n 3) Eliminar producto \n 4) Salir"))
return opcion;
}

function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto: ");
    let id = parseInt(prompt("Ingrese el id del producto: "));
    let precio = parseInt(prompt("Ingrese el precio del producto: "));
    let codigo = parseInt(prompt("Ingrese el codigo del producto"))
    let producto = new Productos(id, nombre, precio, codigo);
    arrayProductos.push(producto); 
    console.log(arrayProductos);
}

function modificarProducto() {
    let codigo = parseInt(prompt("Ingrese el codigo del producto"));
    let producto = arrayProductos.find(producto => producto.codigo === codigo);
    let indice = arrayProductos.indexOf(producto);
    let nombre = prompt("Ingrese el nombre del producto")
    let id = prompt("Ingrese la cantidad del producto");
    let precio = parseInt(prompt("Ingrese el precio del producto"));
    let productoModificado = new Productos(id, nombre, precio, codigo);
    arrayProductos.splice(indice, 1, productoModificado);
    console.log(arrayProductos);
}

function eliminarProducto() {
    let codigo = parseInt(prompt("Ingrese el codigo del producto"))
    let producto = arrayProductos.find(producto => producto.codigo === codigo);
    let indice = arrayProductos.indexOf(producto);
    arrayProductos.splice(indice, 1);
    console.log(arrayProductos);

}

function salir() {
    alert("Gracias por visitarnos");
}

let opcion = menu();
switch (opcion) {
    case 1:
        agregarProducto();
        break;
    case 2:
        modificarProducto();
        break;
    case 3:
        eliminarProducto();
        break;
    case 4:
        salir();
        break;
    default:
        alert("Opción incorrecta, vuelve a intentar!");
        break;
}
