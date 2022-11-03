let carrito = []

function addCarrito(prendaID){
    let compra = {
        nombre: $("#" + prendaID + "Nombre").text(),
        precio: $('#' + prendaID + 'Precio').text()
    }; 
    carrito.push(compra);

    // alert("Producto Añadido al Carrito")
    // document.getElementById("cuerpo").innerHTML = '<img src="img/check.png" class="h-100"> '
    
}

function sumaCarrito(){
    
    let resultado = 0; 
    for (let i = 0; i < carrito.length; i++){
        resultado += parseInt(carrito[i].precio)
        console.log(carrito[i].precio)
    }
    
    return resultado;
    
}

function bodyCarrito(){
    let listado = "";
    if (carrito[0] == undefined){
        listado = "No hay ningun artítulo en tu carrito";
    }else{
        listado = "";
        for (let i = 0; i < carrito.length; i++){
            listado += "<p mt-1 mb-1>" + "Prenda: " + carrito[i].nombre + " " + carrito[i].precio + "<br>" + "</p>"
        }
    }
        
    document.getElementById("bodycarrito").innerHTML = listado 
    
    document.getElementById("totalprice").innerHTML = "Total de la compra: " + sumaCarrito() + "€"
}

function reset(){
    carrito = [];
    bodyCarrito()
}