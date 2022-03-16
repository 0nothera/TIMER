const fetch = require ('node-fetch')


function a() {
    const { Timer } = require('timer-node');

    //creo el timer y lo inicio con el start en 0
    const timer = new Timer({ label: 'test-timer' });
    timer.start();

    //inicio el bucle del timer hasta los 5 segundos ( = 5000 ms)
    do {
        console.log(timer.time())
    } while (timer.ms() < 5000);

    //pauso el timer y muestro por consola su valor
    timer.pause();
    console.log(timer.time());
}

function b() {
    
    const recurso = "http://dummy.restapiexample.com/api/v1/employees"

    fetch(recurso)
        .then(res => res.json())
        .then(json => console.log(json));

}


//recorremos los argumentos del comando
process.argv.forEach(function (val, index, array) { 
     
    //si el tercer argumento es timer
    if((index == 2) && (val == "Timer")){
        a();
    }
    
    //si el tercer argumento es api
    if((index == 2) && (val == "Api")){
        b()
    }

});




