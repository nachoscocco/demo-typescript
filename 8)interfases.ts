    (()=>{

    interface Xmen{          //clase boba sin constructores
        nombre:string,       //forma de definir reglas, si quiero utilizar un xmen
        edad:number,
        poder?:string
    }

     const enviarMision = ( xmen: Xmen ) =>{

         console.log(`Enviando a ${xmen.nombre} a la mision`)
    }

    const volverMision = (xmen: Xmen) => {

        console.log(`vuelve  ${xmen.nombre} al cuartel`)
    }
     
     const wolverine:Xmen = {
         nombre:'Logan',
         edad: 65
     }

    const tormenta: Xmen = {
        nombre: 'Storm',
        edad: 28,
        poder:'Control climatico'
    }

    enviarMision(wolverine);
    volverMision(tormenta);

})();

