cambio = {};

cambio.billetes = [100000, 50000, 20000, 10000, 5000, 2000, 1000];

cambio.darCambio = function(total, pagado){
    var cambio_arr = [];
    var talla = cambio.billetes.length;
    var vuelto = pagado-total;

    for(var i = 0; i < talla; i++){
        var billete = cambio.billetes[i];
        if(vuelto/billete >= 1){
            var time = Math.floor(vuelto/billete);
            for(var j = 0; j < time; j++){
                cambio_arr.push(billete);
                vuelto = vuelto-billete;
            }
        }
    }
    return cambio_arr;
}

cambio.getSomethingElse = function(data){
    console.log(data);
}

//console.log(cambio.darCambio(12000, 100000));


module.exports = cambio;