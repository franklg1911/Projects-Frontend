// Seleccionamos los elementos del DOM
// DOM: Es una interfaz de programación que permite a JavaScript acceder, modificar, crear, reemplazar, editar y eliminar los elementos HTML de una página web.
// getElementById : Selecciona un solo elemento por su ID.
// querySelector : Selecciona un solo elemento por un selector CSS.
// querySelectorALL : Selecciona varios elementos por selector CSS.

// Declaración de variables vacías
// El primer número ingresado por el usuario
let valor1 = "";

// El segundo número ingresado por el usuario
let valor2 = "";

// El resultado de la operación
let resultado = "";

// El operador seleccionado por el usuario
let operador = "";

// Función para aregar el número al visor
function rellenar(numero) {
    // Se coloca "value" porque es un input
    let aux = document.getElementById("visor").value;

    if (aux === "0") {
        document.getElementById("visor").value = numero; // Si es 0, remplazar por el número ingresado
    } else {
        document.getElementById("visor").value += numero; // Si no es 0, agregar el número ingresado
    }
}

// Función para limpiar el visor y los operadores
function limpiar() {
    document.getElementById("visor").value = 0;
    valor1 = "";
    varlo2 = "";
    operador = "";
}

// 
function operacion(simbolo) {

    // Si el valor1 está vacio se le asigna el valor del visor
    if (valor1 === "") {
        operador = simbolo;

        // Aquí se toma el valor que está en el visor (el número que el usuario ha ingresado), se convierte en un número decimal (usando parseFloat()) y se asigna a valor1. Esto almacena el primer número en la operación.
        valor1 = parseFloat(document.getElementById("visor").value);

        // Después de almacenar el primer número en valor1, el visor se limpia (se pone vacío) para que el usuario pueda ingresar el siguiente número, ya que en este punto la calculadora está esperando el siguiente número después de aplicar el operador.
        document.getElementById("visor").value = 0;

        // Si el valor1 no está vacio se le asigna el valor del visor
    } else {
        // valor2 = parseFloat(document.getElementById("visor").value);: Aquí se toma el valor actual del visor (el número que el usuario acaba de ingresar después de seleccionar un operador) y se convierte en un número decimal (parseFloat()). Este valor se asigna a valor2, que representa el segundo número de la operación.
        valor2 = parseFloat(document.getElementById("visor").value);

        switch (operador) {
            case "+":
                valor1 = valor1 + valor2;
                break;

            case "-":
                valor1 = valor1 - valor2;
                break;

            case "*":
                valor1 = valor1 * valor2;
                break;
            
            case "/":
                valor1 = valor1 / valor2;
                break;    

            default:
                break;
        }

        // Aquí, el resultado de la operación se coloca nuevamente en el visor. Esto actualiza el visor para mostrar el valor calculado hasta este momento.
        document.getElementById("visor").value = valor1;

        // Después de realizar la operación, el operador se actualiza con el nuevo operador presionado (+, -, *, /). Esto permite que el siguiente número ingresado se combine con el operador seleccionado.
        operador = simbolo;

        // El visor se limpia de nuevo para que el usuario pueda ingresar el siguiente número, ya que en este punto estamos listos para realizar otra operación.
        document.getElementById("visor").value = ""; // Limpiar el visor para que el usuario pueda ingresar una nueva entrada.
    }
}

// Función para cambiar el signo (positivo o negativo) del número en el visor
function masMenos() {

    // Esta línea obtiene el valor que está actualmente en el visor de la calculadora.
    let valor = document.getElementById("visor").value;

    // charAt(0) devuelve el primer carácter de la cadena valor.
    // valor.charAt(0) === "-": Se verifica si el primer carácter del número (en valor) es un signo negativo ("-"). 

    // Si el primer carácter es un "-" (es decir, el número es negativo), valor.slice(1) elimina el signo negativo y devuelve la parte restante del número (es decir, convierte el número en positivo).

    // Si el primer carácter no es un "-" (es decir, el número es positivo), "-" + valor agrega un signo negativo al principio del número, convirtiéndolo en negativo.

    /* 
    El operador ternario (? :) es una forma corta de escribir una condición if-else. Funciona de la siguiente manera:
        Si la condición valor.charAt(0) === "-" es verdadera (el número es negativo), se ejecuta valor.slice(1) (eliminando el signo negativo).
        Si la condición es falsa (el número es positivo), se ejecuta "-" + valor (agregando el signo negativo al número).
    */

    document.getElementById("visor").value = valor.charAt(0) === "-" ? valor.slice(1) : "-" + valor;
}

// Función para calcular el resultado

// Esta función se llama cuando el usuario presiona el botón de igual (=). En este punto, el usuario ha ingresado el segundo número y ha seleccionado un operador. La función calcular() realiza la operación y muestra el resultado en el visor.
function calcular() {
    valor2 = parseFloat(document.getElementById("visor").value);
    switch (operador) {
        case "+":
            resultado = valor1 + valor2;
            break;

        case "-":
            resultado = valor1 - valor2;
            break;

        case "*":
            resultado = valor1 * valor2;
            break;
        
        case "/":
            resultado = valor1 / valor2;
            break;    

        default:
            break;
    }

    // Aquí se asigna el resultado de la operación al visor, de modo que el resultado se muestra en el campo de texto de la calculadora.
    document.getElementById("visor").value = resultado;

    // Borra el primer valor ingresado (porque el cálculo ya se hizo).
    valor1 = "";

    // Borra el operador, ya que no se necesita más hasta que el usuario elija uno nuevo.
    operador = "";
}

// Asignar eventos a los botones
/* 
    document.querySelectorAll(): Es un método de los arrays o listas en JavaScript. Se utiliza para iterar sobre cada elemento de la lista seleccionada (en este caso, la lista de botones). Para cada botón de la lista, se ejecuta la función que sigue, y dentro de esta función, cada button representa un botón individual de la calculadora.

    button.addEventListener('click', function() {...}):
        addEventListener(): es un método que permite asignar un "escuchador de eventos" a un elemento del DOM, lo que significa que está esperando a que ocurra un evento específico en ese elemento. En este caso, se asigna un evento 'click', lo que significa que la función dentro de addEventListener se ejecutará cuando el usuario haga clic en uno de los botones con la clase number.

    button: hace referencia al botón específico de la iteración actual.

    rellenar(button.innerText): Esta propiedad obtiene el texto que está contenido dentro del botón. En el caso de los botones numéricos, el texto es el número que el botón representa (por ejemplo, el número 7 en el botón de número 7).

    rellenar(button.innerText): Se llama a la función rellenar() y se le pasa el texto del botón, es decir, el número que el usuario ha presionado. La función rellenar() probablemente actualiza el visor de la calculadora con el número presionado.
*/
document.querySelectorAll('.number').forEach(function(button) {
    button.addEventListener('click', function() {
    rellenar(button.innerText);
  });
});

document.querySelectorAll('.operator').forEach(function(button) {
    button.addEventListener('click', function() {
    operacion(button.innerText);
  });
});

document.querySelector('.clear').addEventListener('click', limpiar);
document.querySelector('.equal').addEventListener('click', calcular);
document.querySelector('.equal').addEventListener('click', calcular);
