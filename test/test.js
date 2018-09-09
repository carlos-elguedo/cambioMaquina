var assert = require('assert');
var cambio = require('./cambio');


describe("Registro de cambio", function(){
    describe("Modulo de cambio", function(){
        it("Deberia tener un metodo de cambio", function(){
            assert.equal(typeof cambio, 'object');
            assert.equal(typeof cambio.darCambio, 'function');
        });

        it('dar cambio de (cuesta = 55.000, paga = 100.000) debe retornar 20 + 20 + 5 (k)', function(){
            assert.deepEqual(cambio.darCambio(55000, 100000), [20000, 20000, 5000]);
        });

    });
});