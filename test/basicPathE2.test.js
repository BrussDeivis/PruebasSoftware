const {calculate2, pruebaRutaFlujoControl } = require("../techniques/basicPath")
const assert =require('assert')


describe("Pruebas de Ruta basica Ejercicio 2", function(){
    /*it('debería devolver 3 para entrada 0', function() {
        assert.strictEqual(calculate2(0), 3);
    });

    it('debería devolver 3 para entrada 1', function() {
        assert.strictEqual(calculate2(1), 3);
    });

    it('debería devolver 3 para entrada 2', function() {
        assert.strictEqual(calculate2(2), 3);
    });

    it('debería devolver 4 para entrada 3', function() {
        assert.strictEqual(calculate2(3), 6);
    });
    */
    it('debería devolver un mensaje de aprobación si la calificación es mayor o igual a 60', () => {
        const resultado = pruebaRutaFlujoControl('Ana', 70);
        assert.strictEqual(resultado, 'Ana aprobo con 70.\nAna no tiene premio.');
    });

    it('debería devolver un mensaje de reprobación si la calificación es menor a 60', () => {
        const resultado = pruebaRutaFlujoControl('Juan', 45);
        assert.strictEqual(resultado, 'Juan repobo con 45.\nJuan no tiene premio.');
    });

    it('debería devolver un mensaje de elegibilidad para un premio si la calificación es mayor a 90', () => {
        const resultado = pruebaRutaFlujoControl('Carlos', 95);
        assert.strictEqual(resultado, 'Carlos aprobo con 95.\nCarlos tiene premio');
    });































    
    /*it('debería devolver false para n &lt;= 1', function() {
        assert.strictEqual(calculate2(0), true);
    });

    it('debería devolver true para el número primo 3', function() {
        assert.strictEqual(calculate2(3), true);
    });

    it('debería devolver true para el número primo 4', function() {
        assert.strictEqual(calculate2(4), false);
    });
    it('debería devolver true para el número primo 9', function() {
        assert.strictEqual(calculate2(9), false);
    });*/

});

/*
@startuml

digraph foo{
 I -> L2_3_4_5
 L2_3_4_5 -> L6
 L6->L7
 L7->L8_9
 L8_9->L13
 L7->L11
 L11->L6
 L6->L13
 L13->L14
 L13->F
 L14->F
}

@enduml
 */