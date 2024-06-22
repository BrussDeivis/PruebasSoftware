const {alquileDepartamento,pruebaValorLimtite } = require("../Pruebas_Caja_Blanca/pruebasCajaBlanca")
const assert =require('assert')

describe("Pruebas de Ruta basica Ejercicio 2", function(){

    // Caso de prueba 1: Alquiler exitoso
    it('Debería alquilar el departamento con éxito si está disponible y el arrendatario es mayor de edad', function() {
        const resultado = alquileDepartamento(true, 20); // Suponiendo que el cuarto está disponible y el arrendatario tiene 20 años
        assert.strictEqual(resultado, "Alquilar cuarto con éxito");
    });

    it('No debería alquilar el departamento si no está disponible', function() {
        try {
            alquileDepartamento(false, 25); // Suponiendo que el cuarto no está disponible
            assert.fail('Se esperaba una excepción');
        } catch (error) {
            assert.strictEqual(error.message, "No alquilar cuarto (Cuarto no disponible)");
        }
    });

    it('No debería alquilar el departamento si el arrendatario no es mayor de edad', function() {
        try {
            alquileDepartamento(true, 16); // Suponiendo que el arrendatario tiene menos de 18 años
            assert.fail('Se esperaba una excepción');
        } catch (error) {
            assert.strictEqual(error.message, "No alquilar cuarto (Arrendatario no es mayor de edad)");
        }
    });





    it('debería devolver un error si la contraseña tiene 7 caracteres', () => {
        assert.throws(() => pruebaValorLimtite('P@ssw17'), /La contraseña debe tener entre 8 y 10 caracteres./);
    });
    it('debería devolver un error si la contraseña tiene 11 caracteres', () => {
        assert.throws(() => pruebaValorLimtite('P@ssw178941'), /La contraseña debe tener entre 8 y 10 caracteres./);
    });

    it('debería devolver un mensaje de aprobación si la contraseña es válida con 8 caracteres', () => {
        const resultado = pruebaValorLimtite('Passw1@r');
        assert.strictEqual(resultado, 'La contraseña es válida.');
    });

    it('debería devolver un mensaje de aprobación si la contraseña es válida con 10 caracteres', () => {
        const resultado = pruebaValorLimtite('Passw1@rd1');
        assert.strictEqual(resultado, 'La contraseña es válida.');
    });

    it('debería devolver un error si la contraseña no tiene letras mayúsculas', () => {
        assert.throws(() => pruebaValorLimtite('p@ssword1'), /La contraseña debe tener al menos una letra mayúscula./);
    });

    it('debería devolver un error si la contraseña no tiene letras minúsculas', () => {
        assert.throws(() => pruebaValorLimtite('P@SSWORD1'), /La contraseña debe tener al menos una letra minúscula./);
    });

    it('debería devolver un error si la contraseña no tiene números', () => {
        assert.throws(() => pruebaValorLimtite('Password!'), /La contraseña debe tener al menos un número./);
    });

    it('debería devolver un error si la contraseña no tiene caracteres especiales', () => {
        assert.throws(() => pruebaValorLimtite('Password1'), /La contraseña debe tener al menos un carácter especial./);
    });

    /*it('debería devolver un error si la contraseña no tiene al menos dos letras', () => {
        assert.throws(() => validatePassword('P@1895!9'), /La contraseña debe tener al menos dos letras./);
    });*/

    it('debería devolver un error si la contraseña no tiene al menos dos letras', () => {
        assert.throws(() => pruebaValorLimtite('P@1895!9'), /La contraseña debe tener al menos dos letras./);
    });

    it('debería devolver un mensaje de aprobación si la si tiene al menos una minúscula ', () => {
        const resultado = pruebaValorLimtite('Pa78891@P');
        assert.strictEqual(resultado, 'La contraseña es válida.');
    });

});