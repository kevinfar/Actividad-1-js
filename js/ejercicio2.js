//2. Crear un programa que permita 
//ingresar números enteros del 1 al 10, y muestre su equivalente en números romanos 

numero = Number(prompt('Ingrese un numero'));

function convertirEnteroAromano(numero){
    if(typeof numero !="number" || !Number.isInteger(numero)){
        return null;
    }
    const ROMANOS = [ '' , 'C' , 'CC' , 'CCC' , 'CD' , 'D' , 'DC' , 'DCC' , 'DCCC' , 'CM' ,
    '' , 'X' , 'XX' , 'XXX' , 'XL' , 'L' , 'LX' , 'LXX' , 'LXXX' , 'XC' ,
    '' , 'I' , 'II' , 'III' , 'IV' , 'V' , 'VI' , 'VII' , 'VIII' , 'IX' ] ;

let  digitos  =  String ( numero ) . dividir ( '' ) ;
let  romano  =  '' ;
let  ​​i  =  3 ;

while (i) {
    romano  =  ( ROMANOS [ + digitos . pop ( )  +  ( i  *  10 ) ]  ||  '' )  +  romano

    --i
}
return  Array ( + digitos . join ( '' )  +  1 ) . unir ( 'M' )  +  romano ;
}
consola.log ( convertirEnteroARomano1 ( 11 ) ) ;   // XI
consola.log ( convertirEnteroARomano2 ( 23 ) ) ;   // XXIII
consola.log ( convertirEnteroARomano3 ( 8 ) ) ;   // VII
  