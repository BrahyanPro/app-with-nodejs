const argvs = require("yargs")
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        default: 5,
        desc: "numero base, del que sera la tabla",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        demandOption: true,
        default: false,
        desc: "Si quieres ver la tabla o solo crear el archivo",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        default: 10,
        desc: "hasta  donde llegara la tabla de multiplicar",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "la base tiene que ser un numero";
        }
        return true;
    }).argv;

module.exports = argvs;