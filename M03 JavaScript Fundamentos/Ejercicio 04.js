/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   //1) Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
      var exponete = 2;
      var resultado = 1;
      for(let i=0; i<exponete ;i++){
         resultado *= num;
      }
      return resultado;

}

function elevarAlCubo(num) {
   //2) Retorna el valor de "num" elevado al cubo.
   // Tu código:
   var exponete = 3;
      var resultado = 1;
      for(let i=0; i<exponete ;i++){
         resultado *= num;
      }
      return resultado;
}

function elevar(num, exponent) {
   //3) Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   
   var resultado = 1;
   for(let i=0; i<exponent ;i++){
      resultado *= num;
   }
   return resultado;


}

function redondearNumero(num) {
   //4) Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   return Math.round(num);
}

function redondearHaciaArriba(num) {
   //5) Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   return Math.ceil(num);
}

function numeroRandom() {
   //6) Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:}

   return Math.random();
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};
