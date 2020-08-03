const anotherFunction = () =>{
  //Con var imprime solo 10, con let imprime 0 al 10
  for (let index = 0; index < 10; index++) {
    setTimeout(()=>{
      console.log(index);
    },1000)
    
  }
}
anotherFunction();