const argv = require('./Config/Yargs.js').argv;
const colors = require('colors');




const { crearArchivo, listarTabla } = require('./Multiplicar/Multiplicar.js');
//SE USA DESTRUCTURACION PARA IMPORTAR LO QUE NECESITAS DEL OBJETO. EN ESTE CASO LA FUNCION.



let comando = argv._[0]; //INVESTIGAR ESTO : ES UN OBJETO QUE TIENE COMO PRIMER ATRIBUTO UN ARRAY DONDE SE GUARDAN LOS COMMANDOS O PARAMETROS.

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');

}

let argv2 = process.argv; // este es un objeto que ya esta creado en node
//let parametro = argv[2];// esto es sumamente volatil, pueden haber demasiados errores
//let base = parametro.split('=')[1];


//crearArchivo(base)
//    .then(archivo => console.log(`Archivo creado : ${ archivo }`))
//   .catch(e => console.log(e));