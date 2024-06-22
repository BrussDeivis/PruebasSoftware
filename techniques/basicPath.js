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
    },




    pruebaRutaFlujoControl: function(nombre, calificacion) {
    let mensajeAprobacion = '';
    let mensajeElegibilidad = '';
  
    if (calificacion >= 60) {
        mensajeAprobacion = `${nombre} aprobo con ${calificacion}.`;
    } else {
        mensajeAprobacion = `${nombre} repobo con ${calificacion}.`;
    }

    if (calificacion > 90) {
        mensajeElegibilidad = `${nombre} tiene premio`;
    } else {
        mensajeElegibilidad = `${nombre} no tiene premio.`;
    }

    return `${mensajeAprobacion}\n${mensajeElegibilidad}`;
    },

    alquileDepartamento: function(disponible, edadArrendatario) {
        // Verificar si el cuarto está disponible
        if (!disponible) {
            throw new Error("No alquilar cuarto (Cuarto no disponible)");
        }

        // Verificar si el arrendatario es mayor de edad (18 años en este ejemplo)
        if (edadArrendatario < 18) {
            throw new Error("No alquilar cuarto (Arrendatario no es mayor de edad)");
        }

        // Alquilar el cuarto
        disponible = false; // Marcar el cuarto como no disponible
        edadArrendatario = edadArrendatario;
        return "Alquilar cuarto con éxito";
        },

    

// Llamar a la función pruebaRutaFlujoControl con diferentes datos de estudiantes


    //17 - 14 + 2 = 5


}
