const fruits = () => {
  if(true){
    var fruit1 = 'apple';
    let fruit2 = 'banana';
    const fruit3 = 'kiwi';
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  //console.log(fruit2); // ReferenceError: fruit2 is not defined
  //console.log(fruit3); //ReferenceError: fruit3 is not defined
}
fruits();

/** Imprime: 
 * 2
 * 1
 */
let x = 1;
{
  let x = 2;
  console.log(x);
}
console.log(x);

/** Imprime:
 * 2
 * 2
 */
var x = 1;
{
  var x = 2;
  console.log(x);
}
console.log(x);

const anotherFunction = () =>{
  //Con var imprime solo 10, con let imprime 0 al 10
  for (let index = 0; index < 10; index++) {
    setTimeout(()=>{
      console.log(index);
    },1000)
    
  }
}
anotherFunction();