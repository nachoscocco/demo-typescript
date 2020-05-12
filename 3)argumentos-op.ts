(function(){

   function activar( quien    : string,
                     momento ?: string,
                     objeto   :string = 'la batiseñal'
                     ) {
    if(momento){
     console.log(`${ quien } activa  ${ objeto} en ${ momento}.  `); 
    }
    else{
        console.log(`${quien} activa la ${objeto} .`); 
    }

   };


   activar('Gordon', 'la tarde'); 


})();

