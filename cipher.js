window.cipher = {
  encode: (text, offset) => {
    let textoFinal="";
    for (let index=0 ; index<text.length ; index++){
      //obtiene el numero de una letra que está en la posición index
      let numero = text.charCodeAt(index);
      let textoCifrado = (numero - 65 + offset) % 26 + 65;
      textoFinal += String.fromCharCode(textoCifrado);
    }

    return textoFinal;
  },
  
  decode: (text, offset) => {
    let textoFinalDescifrado="";
    for (let index=0 ; index<text.length ; index++){
      let numero = text.charCodeAt(index);
      let textoDescifrado = (numero + 65 - offset) % 26 + 65;
      textoFinalDescifrado += String.fromCharCode(textoDescifrado);
    
    }

    return textoFinalDescifrado;
  
    /* Acá va tu código 
    frase=documentgetElementById("text").value;*/
  }
}