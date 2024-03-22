/* 1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]. */

console.log("Ejercicio 1");
let stack = [
  "Manzana",
  "Cebolla",
  "Apio",
  "Naranja",
  "Papaya",
  "Sandía",
  "Melón",
];
let newStack = [];
function miFuncion(pila, numero) {
  for (let index = 0; index < numero; index++) {
    newStack.push(pila[index]);
  }

  return newStack;
}
console.log(miFuncion(stack, 4));

/* 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7] */

console.log("Ejercicio 2");

let pilaDos = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
function reemplazar(arreglo, nuevo, viejo) {
  for (let index = arreglo.length - 1; index >= 0; index--) {
    if (arreglo[index] != viejo) {
      arreglo.pop();
    } else if (arreglo[index] == viejo) {
      arreglo.pop();
      arreglo.push(nuevo);
      break;
    }
  }
  return arreglo;
}
console.log(reemplazar(pilaDos, 7, 2));

/* 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen */

console.log("Ejercicio 3");

let recorrido = ["Pueblo origen", "pueblo 1", "pueblo 2", "destino"];

console.log("Recorrido: " + recorrido);
console.log("Regreso: " + recorrido.reverse());

/*  4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar. */

let almacen = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arregloAntes = JSON.stringify(almacen);
console.log("Almacen antes de eliminar, como string:", arregloAntes);

function retirarContenedor(fila, id) {
  if (fila === 0 && id >= 0 && id < almacen[0].length) {
    console.log("Se va a remover: ", almacen[fila][id]);
    almacen[fila].splice(id, 1);
  } else if (fila !== 0) {
    // Recorrer el almacen en la posicion del id, guardar los datos en otra pila, eliminarlos del almacen, remover el contenedor y regresar los contenedores previos
    let pilaTemporal = [];
    console.log(
      `Pila con contenedores removidos para poder sacar el contenedor de abajo es decir el ${almacen[fila][id]}:`,
      pilaTemporal
    ); 
    for (let index = 0; index < fila; index++) {      
        pilaTemporal.push(almacen[index][id]);                  
      almacen[index][id] = "";
    }    
    console.log(
      "Almacen después de remover los contenedores para poder sacar uno y antes de regresarlos a su lugar",JSON.stringify(almacen)
    );
    //debugger;    
      almacen[fila][id] = ""; 
    
     for (let index = 0; index < pilaTemporal.length; index++) {
       almacen[index][id] = pilaTemporal[index];
     }
     console.log(
       "Asi queda el Almacen al final despues de regresar los contenedores a su lugar",
       almacen
     );
  }
}
// El id del contenedor es numero de fila, numero de contenedor comenzando por 0
retirarContenedor(2, 1);
