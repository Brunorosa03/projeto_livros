const controllers_rental = require("../controllers/rental.js")

let nextId = 1


const model = (body, id = proxId++) => {
    if(
        body.livro != undefined &&
        body.estudante != undefined &&
        !isNaN(body.data)&&
        body.aluguel != undefined &&
        body.livro != "" &&
        body.estudante != "" &&
        student_controller.show(body.rede_id)
    ) {
        return {
            id,
            Livro: body.livro,
            Estudante: body.estudante,
            Data: body.data,
            Aluguel: body.aluguel
        }
    }
}

module.exports = {
    model
}





//Atributos do Aluguel:
//id (número único)
//livro_id (número, referenciando um livro)
//estudante_id (número, referenciando um estudante)
//data_aluguel (string, formato de data ISO)
//data_devolucao (string, formato de data ISO, opcional)
