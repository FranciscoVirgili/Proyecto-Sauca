
const jabon = 400;
const shampoo = 700;
const cosmeticos = 650;
const productos = [jabon, shampoo, cosmeticos];
let totalCompra = 0;
let contadorCarrito = [];

function agregarAlCarrito (productos){
    contadorCarrito.push(productos)
    alert("Se agrego tu producto al carrito")
}


function Compra (){
    for(i=0; i<contadorCarrito.length; i++) {
        totalCompra = totalCompra + contadorCarrito[i] 
    }
    alert("Total compra "+"$ "+totalCompra)
    if (totalCompra > 1000) {
        alert("Tu compra supera los $1000, tenes envio gratis")
    } else {
    
    }
}
