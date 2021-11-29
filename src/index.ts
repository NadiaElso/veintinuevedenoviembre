//Ahora se ha decidido ofrecer la posibilidad
//de reservar un pasaje
//Cuando una persona quiere hacer una reserva
//se muestra los lugares libres, el pasajero
//selecciona su asiento y se marca con un 2. Luego, se le informa
//al pasajero la ubicación de su asiento
//Cuando la persona va a comprar un pasaje se verifica
//que ese asiento no esté vendido. Si es así se le informa al pasajero.
//Cuando se va a comprar un pasaje con reserva, se verifica que
//efectivamente ese asiento esté reservado y se informa.
 //Modifique el programa anterior para ofrecer esta nueva funcionalidad
 let fila:any[]=new Array(2);
 let cantidad:number;
 cantidad=0;
 let asientovendidos:number[]=new Array(cantidad);
 let asientosnovendidos:number;
 asientosnovendidos=0;

 let comprar:number;
 comprar=0;
 let reserva:number;
 reserva=0;
 fila[0]=[1,2,3]
 fila[1]=[4,5,6]
 fila[2]=[7,8,9]
 fila[3]=[10,11,12]
 fila[4]=[13,14,15]
 fila[5]=[16,17,18]
 fila[6]=[19,20,21]
 fila[7]=[22,23,24]
 fila[8]=[25,26,27]
 fila[9]=[28,29,30]
 fila[10]=[31,32,33]
 fila[11]=[34,35,36]
 fila[12]=[37,38,39]
 fila[13]=[40,41,42]
 fila[14]=[43,44,45]
 fila[15]=[46,47,48]
 fila[16]=[49,50,51]
 fila[17]=[52,53,54]
 fila[18]=[55,56,57]
 fila[19]=[58,59,60]
 
   
 
 cantidad=Number(prompt("Ingresa la cantidad de asientos que quieres reservar"));
 
 for (let ind = 0; ind < cantidad; ind++) {
   console.log("los asientos disponibles son" +fila)
 asientovendidos[ind]=Number(prompt( "  Ingresa los asientos a reservar" ));
 
     for (let index = 0; index < fila.length; index++) {
       for (let i = 0; i < fila[index].length; i++) {
         asientosnovendidos=(fila[index][i]-asientovendidos[ind])
         console.log(asientosnovendidos);
         if (asientovendidos[ind]===fila[index][i]) {
           console.log(` asiento reservado  ${fila[index][i]}`);
           reserva=asientovendidos[ind]
           fila[index][i]=console.log("asiento reservados"+2) 
           
          }else if(asientovendidos[ind]!==fila[index][i]){
            fila[index][i]=console.log("asientos disponibles"+0)
          }

          }
          
   
          }
         
          for (let index = 0; index < cantidad; index++) {
            comprar=Number(prompt("Ingresa los pasajes a comprar, los asientos disponibles son:" + asientosnovendidos));
            if (comprar===reserva) {
              console.log("Asiento comprado es " + reserva );
            }
              console.log(`Los asientos disponibles son:${asientosnovendidos}, primero se deber realizar la reserva de los pasajes`);
            }
          }
     
   
   
