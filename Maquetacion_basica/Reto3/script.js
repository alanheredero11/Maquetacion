
let array_peticones = []

function import_info() {
    let object = {
        nombre: document.getElementById("input__name").value,
        origen: document.getElementById("input__origin").value,
        destino: document.getElementById("input__destino").value,
        npersonas: document.getElementById("input__number").value,
        fecha: document.getElementById("input__date").value
    }
    
    array_peticones.push(object)
    console.log(array_peticones)    
}

// function filter_field(){                         // A la espera de saber usar el innerHTML              
//     const div = document.querySelector("busqueda__filtrado");
//     div.innerHTML = "<p>Hola</p>"
//     div.innerHTML += "<label id='filtro'>Indique un destino: </label>";
//     div.innerHTML += "<input type='text' id='filtro'></input>";
//     div.innerHTML;

// }
function search(){
    let resultado = []
    for(let i = 0; i < array_peticones.length; i++){

        if (array_peticones[i].destino == "Canarias" || array_peticones[i].destino == "canarias" || array_peticones[i].destino == "Mallorca" || array_peticones[i].destino == "mallorca" || array_peticones[i].destino == "Galicia" || array_peticones[i].destino == "galicia"){
           
            resultado.push(array_peticones[i])

        }
    }
    console.log(resultado)
    return resultado
}

function printSearch(){

    document.getElementById("print__search").textContent = "";
    let busqueda = search();
    let print = "";
    for (let i = 0; i < busqueda.length; i++){
        
        print = "Nombre: " + busqueda[i].nombre + "\n" +
                 "Origen: " + busqueda[i].origen + "\n" + 
                 "Destino: " + busqueda[i].destino + "\n" +
                 "Numero de personas: " + busqueda[i].npersonas + "\n" +
                 "Fecha de Salida: " + busqueda[i].fecha + "\n" 

        document.getElementById("print__search").innerHTML += print;        
    }
}