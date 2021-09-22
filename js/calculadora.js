function init() {


    // variables de evento numeros

    // let uno = document.getElementById("uno");
    let dos = document.getElementById("dos");
    let tres = document.getElementById("tres");
    let cuatro = document.getElementById("cuatro");
    let cinco = document.getElementById("cinco");
    let seis = document.getElementById("seis");
    let siete = document.getElementById("siete");
    let ocho = document.getElementById("ocho");
    let nueve = document.getElementById("nueve");
    let cero = document.getElementById("cero");

    // variables de eveto operaciones
    let suma = document.getElementById("suma");
    let resta = document.getElementById("resta");
    let multiplicacion = document.getElementById("multiplicacion");
    let division = document.getElementById("division");



}

// Variables de operacion
let primerValor = '';
let segundoValor = '';
let operacion = '';

// variables de resultado y limpieza
let respuesta = document.getElementById("resultado");

const digito = (d) => {

    respuesta.value += d;
    primerValor += d;
    console.log(respuesta.value);
    console.log(primerValor);
};

const op = (o) => {
    operacion = o;
    respuesta.value += o;
    segundoValor = primerValor;
    primerValor = '';

};

const resultado = () => {
    debugger;

    switch (operacion) {
        case '+':
            respuesta.value = segundoValor + primerValor;
            break;
        case '-':
            respuesta.value = segundoValor - primerValor;
            break;

        case '*':
            respuesta.value = segundoValor * primerValor;
            break;

        case '/':
            respuesta.value = segundoValor / primerValor;
            break;

        default:
            break;
    }
};

const limpiar = () => {
    respuesta.value = '';
    primerValor = '';
    segundoValor = '';
    operacion = '';
}




