//Clases con sus métodos particulares

class Cuadrado {
    constructor(a) {
        this.a = a;

    }
    areaCuadrado() {
        return this.a * this.a
    }
}

class Resultado {
    constructor(r) {
        this.r = r;
    }
}

class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    areaTriangulo() {
        return (this.base * this.altura) / 2
    }
}


class Circunferencia {
    constructor(radio) {
        this.radio = radio;
    }
    areaCircunferencia() {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

//Variables globales

let area;
let respuesta = "SI";
let resultado = [];
let unResultado = [];

// Ciclo y flujos de control

while (area != 0) {

    area = parseInt(prompt("Ingrese el nro. 1 - si quiere calcular área de un cuadrado, nro. 2 - para calcular el área de triángulo y nro. 3 - para calcular el área de una circunferencia.  Para salir del programa ingrese el número 0."));

    if (area > -1 && area < 4) {

        switch (area) {
            case 0:

            alert ("Lástima, esperamos que la página le haya servido de ayuda");

                break;

            case 1:
                do {
                    //Inicializo mi array

                    let miCuadrado = [];

                    //Pido al usuaruio que ingrese el parámetro

                    let a = parseFloat(prompt("Metros de uno de los lados?"));

                    //Creo mi objeto tipo unCuadrado a partir de la clase Cuadrado y guardo en él el parámetro ingresado

                    const unCuadrado = new Cuadrado(a);

                    //Meto mi objeto dentro del array

                    miCuadrado.push(unCuadrado);

                    //Invoco el método dentro de la clase Cuadrado

                    alert("El área del cuadrado es: " + unCuadrado.areaCuadrado().toFixed(2) + " m2");
                    console.log(miCuadrado);

                    //creo un nuevo array para capturar el valor del area calculada

                    let r = parseFloat(unCuadrado.areaCuadrado().toFixed(2));
                    const unResultado = new Resultado(r);
                    resultado.unshift(unResultado);

                    //variable que controla los dos ciclos do - while y while

                    respuesta = prompt("Quieres seguir calculando áreas de cuadrados? SI/NO");
                    
                    while(respuesta.toUpperCase() !== "SI" && respuesta.toUpperCase() !== "NO"){                        
                        alert("Debe elegir una opción válida");
                        respuesta = prompt("Quieres seguir calculando áreas de cuadrados? SI/NO");
                    }

                } while (respuesta.toUpperCase() !== "NO");

                //Agrupo todos los resultados en un único array

                const resultadoTotal = resultado.concat(unResultado);

                //Método sort

                resultadoTotal.sort((primero, segundo) => primero.r - segundo.r);
                console.log("Los productos ordenados de manera ascendete es ", resultadoTotal);

                break;

            case 2:
                do {
                    let miTriangulo = [];
                    let base = parseFloat(prompt("Metros de la base del triángulo?"));
                    let altura = parseFloat(prompt("Metros de la altura del triángulo?"));
                    const unTriangulo = new Triangulo(base, altura);
                    miTriangulo.push(unTriangulo);

                    alert("El área del triángulo es " + unTriangulo.areaTriangulo().toFixed(2) + " m2");

                    console.log("---> Los parámetros ingresados son: ", miTriangulo);

                    respuesta = prompt("Quieres seguir calculando áreas de triángulos? SI/NO");
                    while(respuesta.toUpperCase() !== "SI" && respuesta.toUpperCase() !== "NO"){                        
                        alert("Debe elegir una opción válida");
                        respuesta = prompt("Quieres seguir calculando áreas de triángulos? SI/NO");
                    }

                } while (respuesta.toUpperCase() !== "NO");
                break;

            case 3:
                do {
                    let miCircunferencia = [];
                    let radio = parseFloat(prompt("Metros del radio de la circunferencia?"));
                    const unaCircunferencia = new Circunferencia(radio);
                    miCircunferencia.push(unaCircunferencia);

                    alert("El área de la circunferencia es: " + unaCircunferencia.areaCircunferencia().toFixed(2) + " m2");

                    console.log("---> Los parámetros ingresados son: ", miCircunferencia);

                    respuesta = prompt("Quieres seguir calculando áreas de circunferencias? SI/NO");
                    while(respuesta.toUpperCase() !== "SI" && respuesta.toUpperCase() !== "NO"){                        
                        alert("Debe elegir una opción válida");
                        respuesta = prompt("Quieres seguir calculando áreas de circunferencias? SI/NO");
                    }

                } while (respuesta.toUpperCase() !== "NO");
                break;
            default:
                break;
        }

    } else {
        alert("El nro. y/o la palabra ingresada no representan una opción a elegir.")
    }
}