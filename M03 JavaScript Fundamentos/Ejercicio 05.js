/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   //1 La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve False.
   // Tu código:
   if(num===0) return false;
   if(num > 0 )
   { return "Es positivo"} else{ return "Es negativo"} ;
}

function agregarSimboloExclamacion(str) {
   //2 Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:

   return (str + "!");
}

function combinarNombres(nombre, apellido) {
   //3 Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:

   return (nombre +" " +apellido);
}

function obtenerSaludo(nombre) {
   //4 Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:

   return `Hola ${nombre}!`;
}

function obtenerAreaRectangulo(alto, ancho) {
   //5) Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:

   return (alto*ancho);
}

function retornarPerimetro(lado) {
   //6) La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
      return(lado*4);
}

function areaDelTriangulo(base, altura) {
   //7) Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   return((base * altura)/2);
}

function deEuroAdolar(euro) {
   //8) Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
    
   var dolares = euro*(1.2)

   return dolares;
   
}

function esVocal(letra) {
   //9 Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   if(letra.length>1) return "Dato incorrecto";
    if(letra==="a" || letra==="e" || letra ==="i" ||letra==="o" || letra==="u"){return "Es vocal"}else{return "Dato incorrecto"}
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};
