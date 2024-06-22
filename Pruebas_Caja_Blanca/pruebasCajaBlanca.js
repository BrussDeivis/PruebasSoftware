module.exports={



    //Prueba de tabla de desiciones
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

        pruebaValorLimtite: function(password) {
            if (password.length < 8 || password.length > 10) {
                throw new Error("La contraseña debe tener entre 8 y 10 caracteres.");
            }
            if ((password.match(/[a-zA-Z]/g) || []).length < 2) {
                throw new Error("La contraseña debe tener al menos dos letras.");
            }
            if (!/[A-Z]/.test(password)) {
                throw new Error("La contraseña debe tener al menos una letra mayúscula.");
            }
            if (!/[a-z]/.test(password)) {
                throw new Error("La contraseña debe tener al menos una letra minúscula.");
            }
            if (!/[0-9]/.test(password)) {
                throw new Error("La contraseña debe tener al menos un número.");
            }
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
                throw new Error("La contraseña debe tener al menos un carácter especial.");
            }
            
    
            return "La contraseña es válida.";
        }

        //prueba valor límite


}
