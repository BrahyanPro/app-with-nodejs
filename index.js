const { multiplicar } = require("./helpers/multiplicar");
const argvs = require("./config/yargs");

console.clear();

console.log(argvs);

multiplicar(argvs.b, argvs.l, argvs.h)
    .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
    .catch((err) => console.log(err));