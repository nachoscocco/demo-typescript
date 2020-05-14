(()=>{
    
    class Pirata  {
        //opcion 1
        /* nombre : string;
        tripulacion : string;
        frutaDelDiablo: boolean;
        recompensa : number; */
        constructor(
                    public nombre:string,
                    public  tripulacion:string,
                    public  frutaDelDiablo:boolean,
                    public recompensa:number  ){}

    }
    
    const luffy = new Pirata('Luffy','Mugiwara',true,150000);
    console.log(luffy);
   

})();

