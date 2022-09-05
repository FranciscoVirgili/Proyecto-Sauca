/* Variables Globales */
let contadorCarrito = (elementosCarritos =
  JSON.parse(localStorage.getItem("carrito")) ?? []);


/* Objetos */
let productos = [
  {
    id: 1,
    nombre: "JABON MIX",
    descripcion: "Jabón artesanal MIX",
    precio: 400,
    category: "jabones",
    img: "../Sauca/imagenes/jabon-artesanal.jpg",
  },
  {
    id: 2,
    nombre: "SHAMPOO GRASO",
    descripcion: "Shampoo sólido para cabello normal a graso",
    precio: 700,
    category: "shampoos",
    img: "../Sauca/imagenes/c-graso-ng.png",
  },
  {
    id: 3,
    nombre: "SHAMPOO SECO",
    descripcion: "Shampoo sólido para cabello normal a seco",
    precio: 700,
    category: "shampoos",
    img: "../Sauca/imagenes/c-solido-ns.png",
  },
  {
    id: 4,
    nombre: "JABON ARTESANAL",
    descripcion: "Jabón artesanal para pieles sensibles",
    precio: 360,
    category: "jabones",
    img: "../Sauca/imagenes/jabonSensible.png",
  },
  {
    id: 5,
    nombre: "JABON EXFOLIANTE",
    descripcion:
      "Jabón artesanal exfoliante fuerte con carbón activado de coco y café. Elaborado con aceite de coco, oliva, almendras dulces y rosa mosqueta con hierbas aromáticas",
    precio: 460,
    category: "jabones",
    img: "../Sauca/imagenes/jabon-exfoliante.png",
  },
  {
    id: 6,
    nombre: "DESODORANTE SOLIDO",
    descripcion:
      "Desodorante sólido para todos los sexos y edades. Apto para todo tipo de deportes y vida cotidiana. Elaborado con materias primas 100% naturales de manera 100% artesanal",
    precio: 600,
    category: "cosmeticos",
    img: "../Sauca/imagenes/desodorante-solido.png",
  },
  {
    id: 7,
    nombre: "UNGUENTO MU",
    descripcion:
      "Ungüento MÜ ideal para aliviar dolores musculares y de articulaciones. Posee propiedades antiinflamatorias, calmantes y antimicrobianas. Elaborado con materias primas 100% naturales de manera 100% artesanal.",
    precio: 680,
    category: "cosmeticos",
    img: "../Sauca/imagenes/unguento-mu.jpeg",
  },
  {
    id: 8,
    nombre: "UNGUENTO SAUCA",
    descripcion:
      "Ungüento SAUCA con propiedades cicatrizantes, antiinflamatorias, regenerativas, calmantes, expectorantes y antimicrobianas. Elaborado con materias primas 100% naturales de manera 100% artesanal.",
    precio: 650,
    category: "cosmeticos",
    img: "../Sauca/imagenes/unguento.jpeg",
  },
  {
    id: 9,
    nombre: "EMULSION DE DIA",
    descripcion:
      "Emulsión de Día con propiedades anti-age, humectantes y regenerativas. Para aplicar en rostro y manos. Elaborada con materias primas 100% naturales de manera 100% artesanal.",
    precio: 950,
    category: "cosmeticos",
    img: "../Sauca/imagenes/emulsion-dia.jpeg",
  },
  {
    id: 10,
    nombre: "EMULSION DE NOCHE",
    descripcion:
      "Emulsión de Noche con propiedades anti-age y tonificantes. Suaviza manchas, arrugas y estrías. Para aplicar en rostro, manos y cuerpo. Elaborada con materias primas 100% naturales de manera 100% artesanal.",
    precio: 950,
    category: "cosmeticos",
    img: "../Sauca/imagenes/emulsion-noche.jpeg",
  },
  {
    id: 11,
    nombre: "DENTRIFICO",
    descripcion:
      "Polvillo limpiador dental con carbón activado y aceite de coco, un toque de bentoita y bicarbonato de sodio. Sus aceites esenciales de naraja dulce, manzanilla, menta y salvia colaborar con el cuidado de los dientes y encías.",
    precio: 300,
    category: "cosmeticos",
    img: "../Sauca/imagenes/dentrifico-sauca.jpeg",
  },
  {
    id: 12,
    nombre: "ROLL ON",
    descripcion:
      "Roll-on herbal contorno de ojos para suavizar ojeras, humectar comisura de labios, sienes y entrecejo. Sus propiedades aromaterapéuticas ayudan a reequilibarar los estados de ánimos especialmente si se aplica en sienes, nuca y muñecas con un suave masaje.",
    precio: 480,
    category: "cosmeticos",
    img: "../Sauca/imagenes/roll-on.jpeg",
  },
];

/* Creando las Cards */

const cardProductos = document.getElementById("card_productos");

productos.forEach((product) => {
  cardProductos.innerHTML += `
<div id="card-productos" id="productos${product.id}">
  <img src="${product.img}" class="card-img-top">
  <div class="card-body">
    <h2 class="card-title">${product.nombre}</h2>
    <p class="card-text">${product.descripcion}</p>
    <p class="card-price">$${product.precio}</p>
    <button class="btn btn-outline-success" id="boton_carrito" type="button" style="width: 5rem" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button> 
  </div>
</div>`;
});

/* Filtrar productos por categoría */

function filtrarProductosCategoria(category) {
  document.getElementById("card_productos").innerHTML = "";
  productoCategoria = document.getElementById("card_productos");
  const productosFiltrados = productos.filter(
    (producto) => producto.category === category
  );
  productosFiltrados.forEach((product) => {
    productoCategoria.innerHTML += `
    <div id="card-productos" id="productos${product.id}">
    <img src="${product.img}" class="card-img-top">
    <div class="card-body">
      <h2 class="card-title">${product.nombre}</h2>
      <p class="card-text">${product.descripcion}</p>
      <p class="card-price">$${product.precio}</p>
      <button class="btn btn-outline-success" id="boton_carrito" type="button" style="width: 5rem" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button> 
    </div>
  </div>`;
  });
}

/* Agregar al carrito */


function agregarAlCarrito(id) {
  let productoSeleccionado = productos.find((product) => product.id === id);
  console.log(productoSeleccionado)
  if(contadorCarrito.some(producto => producto.id === productoSeleccionado.id)){
    contadorCarrito = contadorCarrito.map(producto => {
      if(producto.id === productoSeleccionado.id){
        producto['cantidad']++
      }
      return producto
    })
  }else{
    productoSeleccionado['cantidad'] = 1
    contadorCarrito.push(productoSeleccionado);
  }
  localStorage.setItem("carrito", JSON.stringify(contadorCarrito));
  actualizarCarrito();
  Swal.fire({
    title: `Agregaste ${productoSeleccionado.nombre} al carrito`,
    icon: "success",
    confirmButtonText: "Cool",
  });
  console.log(contadorCarrito);
}


actualizarCarrito()
function actualizarCarrito() {
  let totalCart = document.getElementById("total_carrito");
  totalCart.innerHTML = `<p>$${sumarCarrito(contadorCarrito)}</p>
  `;
}


function sumarCarrito(contadorCarrito) {
  let preciosCarritos = 0;
  for (i = 0; i < contadorCarrito.length; i++) {
    preciosCarritos += contadorCarrito[i].precio * contadorCarrito[i].cantidad  ;
  }
  return preciosCarritos;
}
/*
const botonCompra = document.getElementById("carrito");

botonCompra.addEventListener("click", () => {
  Compra(contadorCarrito);
});*/

function Compra() {
  let totalCompra = 0;
  if (contadorCarrito.length > 0) {
    for (i = 0; i < contadorCarrito.length; i++) {
      totalCompra += Number(contadorCarrito[i].precio*contadorCarrito[i].cantidad);
    }
    console.log(contadorCarrito);
    Swal.fire({
      title: `Tu compra es de $ ${totalCompra.toFixed(2)}`,
      icon: "success",
      confirmButtonText: "Cool",
    });
  } 
}

/* Borrar carrito */

const botonBorrar = document.getElementById("borrar_carrito");
botonBorrar.addEventListener("click", () => {
  borrarCarrito(contadorCarrito);
});

function borrarCarrito() {
  if (contadorCarrito.length > 0) {
    contadorCarrito.splice(0, contadorCarrito.length);
    actualizarCarrito();
    localStorage.clear();
    console.log(contadorCarrito);
    Swal.fire({
      title: `Eliminaste los productos del carrito`,
      icon: "warning",
    });
  } else {
    return Swal.fire({
      title: `No tienes productos en el carrito`,
      icon: "question",
      confirmButtonText: "A comprar!",
    });
  }
}

function borrarProducto(id) {
  contadorCarrito = contadorCarrito.filter((producto) => producto.id !== id);
  console.log(contadorCarrito);
  document.getElementById("producto_carrito_" + id).remove();
  actualizarCarrito();
}
/* Buscando Productos*/

function buscadorProductos() {
  const buscarProductosForm = document.getElementById("buscar_productos_form");
  const buscarProductosInput = document.getElementById("buscar_productos_input");

  buscarProductosForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchValue = buscarProductosInput.value;

  productosSearch = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
  )
  console.log(productosSearch)
})
productosSearch.forEach((product) => {
  productoCategoria.innerHTML += `
<div id="card_productos" id="productos${product.id}">
  <img src="${product.img}" class="card-img-top">
  <div class="card-body">
    <h2 class="card-title">${product.nombre}</h2>
    <p class="card-text">${product.descripcion}</p>
    <p class="card-text">$${product.precio}</p>
    <button class="btn btn-outline-success" id="boton_carrito" type="button" style="width: 5rem" onclick="agregarAlCarrito(${product.id})">Agregar al Carrito</button> 
  </div>
</div>`;
}
)
}

/* MODAL */

const contenidoModal = document.getElementById("modal-content")
function handleModalCarrito(){
  contenidoModal.innerHTML = ''
  contadorCarrito.forEach((productos) => {
    contenidoModal.innerHTML += `<tr id="${'producto_carrito_' + productos.id}">
    <th scope="row" hidden>${productos.id}</th>
    <td>${productos.nombre}</td>
    <td>${productos.cantidad}</td>
    <td>$${productos.precio}</td>
    <td>${productos.cantidad * productos.precio}</td>
    <td style="width: 20% !important;"><button id="eliminar_producto" onclick="borrarProducto(${productos.id})"><img src="./iconos/trash-bin.png"></td>
  </tr>`;
  });
}


/* Agregando FETCH */

const apiKey = "097d49605d295fb53035ecf095dc53fd";
const inputVal = "Salta";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

let acumulador = document.getElementById("weather_section");
let temperaturaIcono = document.getElementById("iconoAnimado");
let temperaturaValor = document.getElementById('temperatura_valor');
let temperaturaDescripcion = document.getElementById('temperatura_descripcion');
let ubicacion = document.getElementById('ubicacion');
let vientoVelocidad = document.getElementById('viento_velocidad');

const tiempoSalta = () => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&lang=es&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((informacionClima) => {
      console.log(informacionClima);

      let temperatura = Math.round(informacionClima.main.temp)
      temperaturaValor.textContent = `${temperatura}ºC`;
      console.log(temperatura);
      
      let descripcion = informacionClima.weather[0].description
      temperaturaDescripcion.textContent=`${descripcion.toUpperCase()}`
      console.log(descripcion);

      let locacion = ubicacion.textContent= `${inputVal.toUpperCase()}`;
      console.log(locacion);

      let velocidadViento = informacionClima.wind.speed
      vientoVelocidad.textContent= `${informacionClima.wind.speed} m/s`;
      console.log(velocidadViento)

     switch (informacionClima.weather[0].main) {
        case "Clear":
          temperaturaIcono.src = "../Sauca/animated/day.svg";
          console.log("Limpio");
          break;

        case "Drizzle":
          temperaturaIcono.src = "../Sauca/animated/rainy-2.svg";
          console.log("Llovizna");
          break;

        case "Thunderstorm":
          temperaturaIcono.src = "../Sauca/animated/thunder.svg";
          console.log("Tormenta");
          break;

        case "Rain":
          temperaturaIcono.src = "../Sauca/animated/rainy-7.svg";
          console.log("Lluvia");
          break;

        case "Snow":
          temperaturaIcono.src = "../Sauca/animated/day.svg";
          console.log("Nieve");
          break;

        case "Clouds":
          temperaturaIcono.src = "../Sauca/animated/cloudy-day-1.svg";
          console.log("Nubes");
          break;

        default:
        }
      })
      }
tiempoSalta();


