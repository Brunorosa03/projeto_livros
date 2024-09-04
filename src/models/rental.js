const book_controller = require("../controllers/book.js")
const student_controller = require("../controllers/student.js")

let nextId = 1

const model = (body, id = nextId++) => {
    console.log(body)

    if(
        body.data_aluguel != undefined &&
        body.data_devolucao != undefined &&
        body.data_aluguel != "" &&
        body.data_devolucao != ""
    ) {
        return{
            id, 
            Book: body.book_id,
            Estudante: body.student_id,
            Aluguel: body.data_aluguel,
            Devolução: body.data_devolucao
        }
    }
}

module.exports = model



//Atributos do Aluguel:
//id (número único)
//livro_id (número, referenciando um livro)
//estudante_id (número, referenciando um estudante)
//data_aluguel (string, formato de data ISO)
//data_devolucao (string, formato de data ISO, opcional)
