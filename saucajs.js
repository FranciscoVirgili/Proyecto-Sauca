const producto1 = {
    nombre: "jabon",
    precio: 400,
    id: 1,
}

const producto2 = {
    nombre: "shampoo",
    precio: 700,
    id: 2,
}

const producto3 = {
    nombre: "cosmeticos",
    precio: 650,
    id: 3,
}

let contadorCarrito = [];

let productos = [producto1, producto2, producto3] 

function agregarAlCarrito (productos){
    contadorCarrito.push(productos)
    alert("Se agrego el producto al carrito")
    console.log(contadorCarrito)
}



function Compra (){
    let totalCompra = 0;
    if (contadorCarrito.length>0){
        for(i=0; i<contadorCarrito.length; i++ ){
        totalCompra = totalCompra + contadorCarrito[i].precio
    }
    console.log(contadorCarrito)
    alert("Total compra "+"$ "+totalCompra)
    if (totalCompra > 1000) {
    alert("Tu compra supera los $1000, tenes envio gratis")
    } else {
    }
    } else {
        return alert("No tienes productos en el carrito")
    }
}

function borrarCarrito () {
    if(contadorCarrito.length > 0){
        contadorCarrito.splice(0,contadorCarrito.length)
        console.log(contadorCarrito)
        alert("Eliminaste los productos del carrito")
    }
    else {
        return alert("No hay nada que eliminar")
    }
}



