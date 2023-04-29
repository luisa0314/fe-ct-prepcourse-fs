/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:+
   var lista = Object.keys(objeto);
   var array = [];
   for (let i = 0; i < lista.length; i++) {
      array.push([lista[i], objeto[lista[i]]]);
      
   }
   return array;

   }



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let result={}; //Objeto que guardará el resultado

    for(let i=0; i<string.length; i++){
        if (result[string[i]]){ //Existe la propiedad???
            result[string[i]]++; //Si existe, le sumamos 1
        }
        else{ //No existe. La creamos con valor 1
            result[string[i]]=1; 
        }
    }
    return result;
   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array = string.split('');;
   var mayuscula = '';    
   var minuscula = '';

    for (i = 0; i<array.length; i++){
    if(array[i] === string[i].toUpperCase()){
      mayuscula += array[i];
    }
    if(array[i] === string[i].toLowerCase()){
    minuscula += array[i];
    }
     }  
       return mayuscula+ minuscula ;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var espejo = '';
   for(let i = frase.length -1; i >= 0; i--) {
     espejo += frase[i];
   };
  return espejo.split(' ').reverse().join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  var numNuevo = numero.toString();
  for(var i=0; i < numNuevo.length; i++){
   if (numNuevo[i] == numNuevo[numNuevo.length-1-i]) {
      return "Es capicua";
      
   } else {
      return "No es capicua";
   }

}
   
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split('');;
   var nuevoString = '';
   for (i = 0; i<array.length; i++){
      if(array[i] === "a" || array[i] === "b" || array[i] === "c"){
       delete array[i];
      }
   }
      nuevoString = array.join("");
      return nuevoString;

}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var array = arrayOfStrings;
   for (let i = 0; i < array.length; i++) {
      var comparar = array[i];
      j=i-1;

      while (j >=0 && comparar.length< array[j].length) {
         array[j+1] = array[j];
         j--;         
      }
      array [j+1]= comparar  
   }
   return array;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array = [];
   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
         if (array1[i]=== array2[j]) {
            array.push(array1[i]);
         }  
      }
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
