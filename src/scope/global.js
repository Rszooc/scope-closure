var hello = "Hello";
var hello = "Hello +"; // Mala practica
let world = 'Hello World'; 
let world = 'Hello World +'; //No se puede
const helloWorld = 'Hello World';

const anotherFunction = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

const helloWorld = () => {
    globalVar = 'Variable global';
}
helloWorld();
console.log(globalVar);

