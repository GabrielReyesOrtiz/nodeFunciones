// Aqui se declara una funcion con la palabra reservada function.
function greet(){
    console.log("Hello");
    console.log(`2 veces x ${2*2} Hello`);

}
// Aqui mandamos llamar a la funcion greet usando parentesis.
greet();
// Creamos una funcion que recibe un parametro en este caso se llama fn pero puede llamarse como sea.
function logGreeting(fn) {
    fn();
}
//Aqui mandamos llamar la funcion logGreeting y le pasamos la fruncion greet como un parametro.
logGreeting(greet);
// Aqui estamos creando una  function expression con nombre por que tambien pueden ser anonimas
let greetMe = function () {
    console.log("Hello from the function expression");
}
//Mandamos llamar a la function expression greetMe ya saben solo se ponene parentesis y ya.
greetMe();
//Aqui por ejemplo la funcion greetMe tambien la podemos pasar como parametro por la funcion logGreeting.
logGreeting(greetMe);
//Aqui estamos declarando una Arrow Function  yo si las usaba antes y son muy practicas.
//Lo que no sabia era que se podia usar sin llaves cuando solo escribes una linea de codigo.
let mifuncion = () => 
    console.log("Hello from arrow")
//Y para mandarla llamar es igual el nombre y los parentesis y listo.
    mifuncion();
//Estas son las Arrow Functions que yo habia usado a las que les pasas parametros en los parentesis.
let saludo = (nombre, tratamiento) => {
  //Esta forma de imprimir en pantalla es muy comoda te ayuda a imprimir diferentes parametros concatenandolos
    console.log(`Hola ${tratamiento} ${nombre}`); 
}
//Mandamos llamar la Arrow Function saludo() pero le debemos pasar 2 parametros nombre y tratamiento.
saludo("Miguel", "Sr.");

//Aqui por ejemplo cuando tenemos solo un parametro no necesitamos parentesis 
let cuadro = numero => numero * numero;
//Aqui mandamos llamar la Arrow Function cuadro con un solo parametro.
console.log(cuadro(3));
// Podemos ahorrarnos las llaves si nuestro codigo esta en una sola linea
let saludos = (nombre, tratamiento) =>  console.log(`Hola ${tratamiento} ${nombre}`); 
saludo("Juana", "Sra.");
//Aqui lo que hacemos es pasar una Arrow Function anonima como parametro.
logGreeting(() => console.log("Hello from Arrow Greeting") );

/*A continuacion lo que hacemos es comparar las diferentes formas de crear funciones
y como vamos  ahorrando lineas de codigo*/ 

function cuadrado1(numero){
  return numero * numero;
}
console.log(cuadrado1(9));

let cuadrado2 = numero => {
  return numero * numero;
}
console.log(cuadrado2(8));

let cuadrado3 = numero => numero + numero;
console.log(cuadrado3(7));

// A continuacion lo que hicimos fue pasar las funciones greet, logGreeting y greetMe a ArrowFunctions. 
let greet2 = () => console.log("Hello greet2")

let logGreeting2 = fn => {
    fn();
}

let greetMe2 = () => {
    console.log("Hello from GreetMe2");
}