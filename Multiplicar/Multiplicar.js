//requireds
const fs = require('fs');
// const fs = require('express'); // es un paquete que se instala(exteriores)
//const fs = require('./fs'); // si emmpieza con ./ son archivos que nosotros mismos escribimos y tiene un path
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log(`============================`.green);
    console.log(`Tabla del ${ base }`.green)
    console.log(`============================`.green)

    var data = '';

    for (let i = 1; i <= limite; i++) {

        data += (`${ base } * ${i} = ${ base * i }\n`);
    }
    console.log(data);

}



let crearArchivo = (base, limite) => { // Funcion para Multiplicar numeros.

    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`${ base } no es un numero.`);
            return;
        }


        for (let i = 1; i <= limite; i++) {

            data += (`${ base } * ${i} = ${ base * i }\n`);
        }
        console.log(data);


        fs.writeFile(`./tablas/tabla-${base} al ${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base} al ${ limite }.txt `);
        });



    });
}

module.exports = { //se crea un objeto global para
    // guardar la funcion como atributo
    crearArchivo,
    listarTabla
}