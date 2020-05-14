(()=>{
    

    const avenger = {
        nombre:'Roger',
        clave:'Capitan America',
        poder:'Fuerza adquirida'
    }
  //FORMA 1  
    /* const extraer = (avenger:any) =>{
        const {nombre ,poder } = avenger;
        console.log(nombre);
        console.log(poder);
     }*/
  //FORMA 2
 /*    const extraerAv = ( {nombre,poder} : any ) => {  //aqui especificariamos q tipo de datos es avenger por ahora any
       
        console.log(nombre);
        console.log(poder);
    }

    extraer(avenger); */

    //FORMA 1 ARRAY

    const mugiwaras:string [] = ['Luffy','Zoro','Nami']
    const [gomu,espada,clima] = mugiwaras;

    console.log(gomu);
    console.log(espada);
    console.log(clima);

    //FORMA 2 ARRAY

    const extraerMug = ([ luffy,zoro,nami] : string[] ) => {  //aqui especificariamos q tipo de datos es avenger por ahora any
        console.log(luffy);
        console.log(zoro);
        console.log(nami);
       
    }
    extraerMug(mugiwaras);

})();

