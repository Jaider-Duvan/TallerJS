const prompt = require("prompt-sync")();

const inventario = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Zapatos", precio: 50 },
  { nombre: "pantalon", precio: 50 },
  { nombre: "Gorros", precio: 50 },
];

let nombre = prompt("Ingrese el nombre del producto: ");

function buscarProducto(nombre, inventario) {
    for (let producto of inventario) {
        if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
        console.log(" El producto sí existe:", producto);
        return producto;
    }
}

    console.log(" Producto no encontrado.");
    return null;
}

buscarProducto(nombre, inventario);
