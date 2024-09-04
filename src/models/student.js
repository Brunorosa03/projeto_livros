const student_controller = require("../controllers/student.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        body.nome != undefined &&
        body.matricula != undefined &&
        body.curso != undefined &&
        !isNaN(body.ano) &&
        body.nome != "" &&
        student_controller.show(body.rede_id)
    ) {
        return {
            id,
            Nome: body.nome,
            Matricula: body.matricula,
            Curso: body.curso,
            Ano: body.numero
        }
    }
}

module.exports = {
    model
}
