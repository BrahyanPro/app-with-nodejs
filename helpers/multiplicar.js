const fs = require("fs");

const multiplicar = async(num, listar, hasta) => {
    try {
        let salida = "";
        for (let index = 1; index <= hasta; index++) {
            const resultado = num * index;

            salida += `${num} x ${index} = ${resultado}\n`;
        }

        if (listar) {
            console.log("================");
            console.log("tabla del:", num);
            console.log("================");
            console.log(salida);
        }

        fs.writeFileSync(`../salida/tabla-${num}.txt`, salida);

        return `tabla${num}.txt`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    multiplicar,
};