//3. Crear un programa que me permita ingresar la edad de 
//20 personas, y al final mostrar cuantos mayores y menos de edad hay.

alert('Crear un programa que me permita ingresar la edad de 20 personas,y al final mostrar cuantos mayores y menos de edad hay.');
let edad = 0; 
let menor = 0;
let mayor =0;
for (let i = 1; i <= 20; i++) {
    edad = Number(prompt('ingrese edad '+i));
    if (edad <= 18) {
        menor += 1;

    } else {
        mayor += 1;
    }
    
}

alert('Cantidad menores de edad; '+menor+'\nCantidad mayores de edad: '+mayor);

document.getElementById('menores').innerHTML = 'Cantidad menores de edad; '+menor;

document.getElementById('mayores').innerHTML = 'Cantidad mayores de edad; '+mayor;