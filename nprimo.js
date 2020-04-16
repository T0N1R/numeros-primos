let contador_numeros_primos = 0;
let array = [];
let numero = 2;


function numero_primo(numero) {
    for (x = 2; x < numero; x++){
        if (numero%x == 0){
            // si el valor es 0, si es divisible por x
            return false;
        }
    }
    return true;
}


while (contador_numeros_primos < 10){
    if (numero_primo(numero) == true){
        array.push(numero);
        contador_numeros_primos++
    }
    numero++;
}


console.log("primeros numeros primos");
console.log(array);