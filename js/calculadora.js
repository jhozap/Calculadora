// Variables de operacion
let primerValor = '';
let segundoValor = '';
let operacion = '';

// variables de resultado y limpieza
let respuesta = document.getElementById("resultado");

const digito = (d) => {
    debugger;
    respuesta.value +=  d;
    primerValor = primerValor + d;
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




