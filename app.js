const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`archivo creado ${archivo}`));
        break;
    default:
        console.log("comando no reconocido");
}