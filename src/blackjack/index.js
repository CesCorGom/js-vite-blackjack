
//impirts
import { crearBarajaVU} from  './usecases'

(()=>
{
        'use strict'
    let cartas=[],cartasJugador=[],cartasComputadora=[];
    let totalJugador=0,totalComputadora =0,asesjug=0,asescompu=0;
    let htmljug= document.getElementById("jugador-cartas"),htmlcom=document.getElementById("computadora-cartas");

    //referencias html
    const btnPedir=document.getElementById("pedirCarta");
    const btnNuevo=document.getElementById("nuevo");
    const btnQuedar=document.getElementById("quedar");
    const btnIniJug=document.getElementById("inciar-juego");
    const impriCartasJug=document.getElementById("jugador-cartas");
    const impriCartasCom=document.getElementById("computadora-cartas");


 
    // inicia el juego haciendo la llmada para crear baraja
 const iniciarJuego=()=> 
    {
        crearBarajaVU(cartas);
        for(let i=0;i<2;i++)
        {
            pedirCarta();
            document.getElementById("resultadoCom").innerHTML = totalComputadora;   
        }
        
                
        
    }


// crea la baraja inicial para que los jugadores tomen las cartas



    // revisa si la carta que salio es un as
    let hayAs=(esAs)=> esAs==11?1:0; 

    // revisa si el jugador perdio con mas de 21 y sigue la computadora 
    let mas21=()=> totalJugador>21? turnoComputadora():0;
    // revisa si el jugador posee 21
    let ventiUnoJ=()=> totalJugador===21?true:false;
    //revisa si la computadora posee 21
    let ventiUnoC=()=> totalComputadora===21?true:false;
    // revisa si el jugador obtuvo 5 cartas menores a 21 y eso hace que gane automaticamente 
    let cincoCartasJ=()=> cartasJugador.length===5 && totalJugador<21? true:false;
    // revisa si la coputadora obtuvo 5 cartas menores a 21 y eso hce que gane automaticamente
    let cincoCartasC=()=> cartasJugador.length===5 && totalComputadora<21?true:false;


    let ganador=()=> 
        {
            if(cincoCartasJ())
            {
                alert("gano jugador");
            }

            if(cincoCartasC ())
            {
                alert("gano computadora");
            }

            if(ventiUnoC())
            {
            alert("gano computadora"); 
            }

            if(totalComputadora>totalJugador && totalComputadora<21)
            {
                alert("gano computadora"); 
            }

            if(totalComputadora>21 && totalJugador<21)
            {
                alert("gano jugador");
            }

            if(totalComputadora===totalJugador && totalComputadora<21)
            {
                alert("gano computadora"); 
            }

            if(totalJugador>21 && totalComputadora<21)
            {
                alert("gano computadora"); 
            }
            
            
        
            

        }
        



    let generarRandom=()=> Math.floor(Math.random() * cartas.length);

    let pedirCarta =()=>{
        let numeroAleatorio = generarRandom();
        let carta= cartas[numeroAleatorio];
        cartasJugador.push(carta);
        asesjug+=hayAs(carta.numero);

        if(asesjug>1&&(totalJugador+asesjug)<21)
        {
            totalJugador-=10;
        }
        else{
                totalJugador+=carta.numero;
        }
        cartas.splice(numeroAleatorio,1);
        document.getElementById("resultadoJug").innerHTML = totalJugador; 
        const imgCarta=document.createElement('img');
        imgCarta.src= `assets/cartas/${carta.imagen}`;
        imgCarta.classList.add('carta');
        impriCartasJug.append(imgCarta);
        mas21();

        if(cincoCartasJ())
        {
            ganador();
        
        }
        ventiUnoJ();
        
    
    };


    let turnoComputadora=()=>
    {
        if(cartasComputadora.length<2)//turno inicial
        {
            let numeroAleatorio = generarRandom();
            let carta= cartas[numeroAleatorio];
            cartasComputadora.push(carta);
            asescompu+=hayAs(carta.numero);

            if(asescompu>1&&(totalComputadora+asescompu)<21)
            {
                totalComputadora-=10;
            }
            else{
                totalComputadora+=carta.numero;
            }
            cartas.splice(numeroAleatorio,1);
            const imgCarta=document.createElement('img');
            imgCarta.src= `/cartas/${carta.imagen}`;
            imgCarta.classList.add('carta');
            impriCartasCom.append(imgCarta);
            document.getElementById("resultadoCom").innerHTML = totalComputadora;
        setTimeout(()=>
                {
                        
            if(cartasComputadora.length===1)
            {
                  return turnoComputadora();
                
              
            }
            if((totalComputadora>totalJugador || totalComputadora===totalJugador))
                {
                    
                      return ganador();
                    
                }
            
          },700);

            
        
        } 
                if(totalComputadora<21 && totalComputadora<totalJugador && totalJugador<=21) // buscar ganar jugador 
            {
                let numeroAleatorio = generarRandom();
                let carta= cartas[numeroAleatorio];
                cartasComputadora.push(carta);
                asescompu+=hayAs(carta.numero);

                if(asescompu>1&&(totalComputadora+asescompu)<21)
                {
                    totalComputadora+=asescompu*1;
                }
                else{
                    totalComputadora+=carta.numero;
                }
                    cartas.splice(numeroAleatorio,1);
                    document.getElementById("resultadoCom").innerHTML = totalComputadora;
                    const imgCarta=document.createElement('img');
                    imgCarta.src= `/cartas/${carta.imagen}`;
                    imgCarta.classList.add('carta');
                    impriCartasCom.append(imgCarta);
                    setTimeout(()=>
                    {
                        ganador();
                
                            
                      turnoComputadora();
                    },700);
            }
            
        
            if(totalJugador>21)
            {
              setTimeout(()=>
                {          
                   ganador();   
                
                },1000);
              
            }
            
    
    

    }


    let jugarNuevo=()=> 
    {
        location.reload();
        cartas=[];
        cartasJugador=[];
        cartasComputadora=[];
        totalJugador=0;
        totalComputadora=0;
        console.clear();

    }



    //eventos 

    btnPedir.addEventListener('click',()=>
    {
        pedirCarta();
    });

    btnQuedar.addEventListener('click',()=>
    {
        turnoComputadora();
    });

    btnNuevo.addEventListener('click',()=>
    {
        jugarNuevo();
    });

    btnIniJug.addEventListener('click',()=>
    {
        iniciarJuego()
    })
})();

