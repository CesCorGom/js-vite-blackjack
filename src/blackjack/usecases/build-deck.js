



/**
 * Crea la baraja de 52 naipes con el nombre de la imagen y el valor de la carta por defecto para el juego 21.
 * @param {Array } cartas ejemplo lo convierte en cartas[{numero;imagen}]
 */
export const crearBarajaVU=(cartas )=>{

    if(!cartas) throw new Error('Se esperaba el contenedor de cartas');
        for( let i=1;i<13;i++)
        {
            if(i<2 )
            {
                cartas.push({numero:11,
                        imagen:"AC.png"});

                cartas.push({numero:11,
                        imagen:"AD.png"});
                        
                cartas.push({numero:11,
                        imagen:"AH.png"});
                        
                cartas.push({numero:11,
                        imagen:"AS.png"});
            } else
            if(i>10)
            {
                cartas.push({numero:10,
                        imagen:String.fromCharCode(i+63)+"C.png"});

                cartas.push({numero:10,
                        imagen:String.fromCharCode(i+63)+"D.png"});
                        
                cartas.push({numero:10,
                        imagen:String.fromCharCode(i+63)+"H.png"});
                        
                cartas.push({numero:10,
                        imagen:String.fromCharCode(i+63)+"S.png"});
            }
            else{

                cartas.push({numero:i,
                        imagen:i+"C.png",});

                cartas.push({numero:i,
                        imagen:i+"D.png",});
                        
                cartas.push({numero:i,
                        imagen:i+"H.png",});
                        
                cartas.push({numero:i,
                        imagen:i+"S.png",});
                }
                        
        }
            cartas.push({numero:10,
                        imagen:"QC.png",});

                cartas.push({numero:10,
                        imagen:"QD.png",});
                        
                cartas.push({numero:10,
                        imagen:"QH.png",});
                        
                cartas.push({numero:10,
                        imagen:"QS.png",});


                

    }