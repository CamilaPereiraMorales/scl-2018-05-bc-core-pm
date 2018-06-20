cifrarClick= () =>{
    let frase =document.getElementById("text").value; /*Llamo al texto ingresado por el usuario */
    frase=frase.toUpperCase();/*convierto el string ingresado a mayusculas*/
    let off= document.getElementById("offset").value;
    let encodeMessage="";
    
    document.getElementById("textoListo").innerHTML=window.cipher.encode(frase , off);
}
descifrarClick= () =>{
    let frase =document.getElementById("text").value; /*Llamo al texto ingresado por el usuario */
    frase=frase.toUpperCase();/*convierto el string ingresado a mayusculas*/
    let off= document.getElementById("offset").value;
    let encodeMessage="";
    
    document.getElementById("textoListo").innerHTML=window.cipher.decode(frase , off);
}
/* Acá va tu código */
