var hello = 'Hello';
var hello = 'Hola'; // Se puede reescribir pero es mala practica
let world = 'Hello world';
//let world = 'Hello world'; // SyntaxError: Identifier 'world' has already been declared
const helloword = 'Hello world!';
//const helloword = 'Hello world!'; //SyntaxError: Identifier 'helloword' has already been declared

const anotherFunction = () =>{
  console.log(hello);
  console.log(world);
  console.log(helloword);
}

anotherFunction();

const helloWorld = () =>{
  //Otra mala practica es no designar var, let o const
  globalVar = 'Im global pero no tengo var, let o const :/';
}
helloWorld();
console.log(globalVar);

const anotherFunction = () =>{
  //Mala practica la doble asignación
  var localVar = globalVar = 'Im global';
}
anotherFunction();
console.log(globalVar);
