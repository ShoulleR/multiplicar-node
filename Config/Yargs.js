const opts = {
    base: {
        demmand: true,
        //demand funciona para que sea obligatorio el requerimiento.
        alias: 'b' // puede escribir con alias b
    },
    limite: {
        alias: 'l',
        default: 10 //valor default del parametro o flag limite
    }

}



const argv = require('yargs') // el metodo command de yargs, el primer 
    //argumento es el comando para usar el metodo, el segundo argumento es un titulo que ayude a entender que esta haciendo el metodo
    //el tercer argumento es un objeto(va a recibir la config de parametros o flags(--)que ese commando va a recibir)
    .command('listar', 'Crea e imprime en consola la tabla de multiplicar', { opts })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', { opts }) //<----- SEGUNDO COMMANDO QUE SE PUEDE USAR EN LA CONSOLA.

.help()
    .argv;




module.exports = {
    argv
}




//requires

/*const argv = require('yargs') // el metodo command de yargs, el primer 
    //argumento es el comando para usar el metodo, el segundo argumento es un titulo que ayude a entender que esta haciendo el metodo
    //el tercer argumento es un objeto(va a recibir la config de parametros o flags(--)que ese commando va a recibir)
    .command('listar', 'Crea e imprime en consola la tabla de multiplicar', {
        base: {
            demmand: true,
            //demand funciona para que sea obligatorio el requerimiento.
            alias: 'b' // puede escribir con alias b
        },
        limite: {
            alias: 'l',
            default: 10 //valor default del parametro o flag limite
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar', { //<----- SEGUNDO COMMANDO QUE SE PUEDE USAR EN LA CONSOLA.
        base: {
            demmand: true,
            //demand funciona para que sea obligatorio el requerimiento.
            alias: 'b' // puede escribir con alias b
        },
        limite: {
            alias: 'l',
            default: 10 //valor default del parametro o flag limite
        }
    })
    .help()
    .argv;*/