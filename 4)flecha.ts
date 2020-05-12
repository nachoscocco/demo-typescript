(function(){

  //funcion antes
      function funcionVieja (){
    
    
      };
  //funcion ahora
      const funcionNueva =  function(a:string){
       return a.toUpperCase();
      };
  //funcionn Flecha ==>
   /*  const funcionFlecha =   ( a : string ) => a.toUpperCase();

        console.log(funcionNueva('Normal'));
        console.log(funcionFlecha('Flecha')); */
    
    const funcionSuma = function ( a : number , b : number){
        return a + b;
    }
    const funcionSumaF = (a: number, b: number) => a + b;

    console.log(funcionSuma(4,4));
    console.log(funcionSumaF(4,4));
    
    const hulk={
        nombre:'Hulk',
        smash(){
            setTimeout( () => {
                console.log(`${this.nombre} smash!!!`);
            } ,1000)
            
        }
    }

})();

