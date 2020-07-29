const helloWorld = () => {
  const hello = 'Hello';
  console.log(hello);
};

helloWorld();
//console.log(hello); //ReferenceError: hello is not defined No hay una variable global

var scope = 'I am global';

const functionScope = () =>{
  var scope = "I am just a local";
  const func = () =>{
    return scope;
  }
  console.log(func());
}
functionScope(); // Imprime variable local
console.log(scope); // Imprime variable global