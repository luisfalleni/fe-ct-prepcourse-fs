/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   //1 Retorna True si "x" e "y" son iguales.
   // De lo contrario, retorna False.
   // Tu código:

   if( x === y ){return true}else {return false};
}

function tienenMismaLongitud(str1, str2) {
   //2 Retorna True si los dos strings tienen la misma longitud.
   // De lo contrario, retorna False.
   // Tu código:

   if (str1.length === str2.length){return true}else{return false};
}

function menosQueNoventa(num) {
   //3 Retorna True si el argumento "num" es menor que noventa.
   // De lo contrario, retorna False.
   // Tu código:
   if( num<90 ){return true}else{return false};
}

function mayorQueCincuenta(num) {
   //4 Retorna True si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna False.
   // Tu código:
   if(num>50){return true}else{return false};
}

function esPar(num) {
   //5 Retorna True si "num" es par.
   // De lo contrario, retorna False.
   // Tu código:
   if(num%2 === 0){return true}else{return false};
}

function esImpar(num) {
   //6 Retorna True si "num" es impar.
   // De lo contrario, retorna False.
   // Tu código:
   if(num%2 !== 0){return true}else{return false};
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};
