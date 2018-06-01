function cifrarClick(){
    let frase =document.getElementById("text").value; /*Llamo al texto ingresado por el usuario */
    frase=frase.toUpperCase();/*convierto el string ingresado a mayusculas*/
    let offset= 2;
    let encodeMessage="";
    
    document.getElementById("textoListo").innerHTML=window.cipher.encode(frase , offset);
}
/* Acá va tu código */