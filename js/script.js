// //alert('Bienvenido a Telecomunicaciones en Colombia');
// //prompt('Ingresa tu municipio de residencia');
// //confirm("Deseas salir de la pagina?");

// // var nombre='Telecomunicaciones';
// // alert(nombre);
// // var numero=2020;
// // var ejemplo=true;

// function mensaje(){
//     return alert('Bienvenido a Telecomunicaciones en Colombia')
// }



function ingenieria(params) {
    var IngenieriaSitio=prompt('Cómo se llama la rama de la ingeniería de la que trata este sitio?');
    // if (IngenieriaSitio=='telecomunicaciones') {
    //     alert('Corecto!')
    // } else {
    //     alert('Incorecto!')
    // }

    switch (IngenieriaSitio) {
        case "telecomunicaciones":
            alert("Correcto!")
            break;
        case "ingenieria":
            alert('Piensa en la rama de ingenieria especifica')
            break;
        default:
            alert('Incorrecto!')
            break;
    }
}


function confirmacion(params) {
    return confirm('Deseas ir a la red social?');
    }
