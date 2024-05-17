module.exports={
    calculate2: function(n) {
        let contador = n;
        if (contador < 3) {
            console.log("Primera condición - if: contador es menor que 3");
            if (contador < 2) {
                console.log("Segunda condición - if dentro del primero: contador es menor que 2");
            }
        }
        if (contador === 0) {
            console.log("Tercera condición - if fuera de los anteriores: contador es igual a 0");
        }
        do {
            console.log("Ciclo do-while ejecutándose al menos una vez");
            contador++;
        } while (contador < 3);
        return contador;
    }

    //17 - 14 + 2 = 5


}
