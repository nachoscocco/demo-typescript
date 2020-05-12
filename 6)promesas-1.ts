(()=>{
     //se trabaja con ES6 ya que ES5 NO incluye promesas pero angular incorpora la libreria, por ahora usar es6

  console.log('Inicio');

    const promesa = new Promise( ( resolve , reject )=>{
        
        setTimeout(() => {
            reject('Se termino el timeout'); //resolve es salida buena 
        }, 1000);


    });

    promesa
            .then(mensaje => console.log (mensaje)) //devuelve el *Resolve*
            .catch(error => console.warn (error));


  console.log('Fin');
    

})();

