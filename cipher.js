const aAscii=65;
const alfabet=26;

window.cipher = {
    encode: (text, offset) => {
      let textoFinal="";
      for (let index=0 ; index<text.length ; index++){
        //obtiene el numero de una letra que está en la posición index
        let numero = text.charCodeAt(index);
        let textoCifrado = (numero - aAscii + offset) % alfabet + aAscii;
        textoFinal += String.fromCharCode(textoCifrado);
      }

      return textoFinal;
    },

    decode: (text, offset) => {
      let textoFinalDescifrado="";
      for (let index=0 ; index<text.lenght ; index++){
        let numero = frase.charCodeAt(index);
        let textoDesCifrado = (numero - aAscii - offset) % alfabet + aAscii;
        textoFinalDescifrado += String.fromCharCode(TextoDescifrado);
      
      }

      return textoFinalDescifrado
    
      /* Acá va tu código 
      frase=documentgetElementById("text").value;*/
    }
  }
