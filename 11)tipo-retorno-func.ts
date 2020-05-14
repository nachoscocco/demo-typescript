(()=>{
    
  const sumar = ( s1: number, s2: number): number =>s1 + s2;

  const nombre = ():string => 'Hola Nacho';

  const obtenerSalario = ():Promise<string> =>{

    return new Promise ((resolve,reject)=>{
        resolve('Nacho');
        reject('scocco');
        
    });
  }
  
  obtenerSalario()
   .then( a => console.log(a.toUpperCase()));
        
    
 
})();

