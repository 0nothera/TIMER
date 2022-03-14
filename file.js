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