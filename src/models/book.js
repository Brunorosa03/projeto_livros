const controllers_rental = require("../controllers/rental.js")

let nextId = 1

const model = (body, id = proxId++) => {
    if(
        body.titulo != undefined &&
        body.autor != undefined &&
        !isNaN(body.ano) &&
        body.genero != undefined &&
        body.titulo != "" &&
        body.autor != "" &&
        body.genero != "" &&
        book_controller.show(body.rede_id)
    ) {
        return {
            id,
            Título: body.titulo,
            Autor: body.autor,
            Ano: body.ano,
            Gênero: body.genero
        }
    }
}

module.exports = {
    model
}





//Estrutura do ProjetoTipo de Dado: Livro (Book)

//   Atributos do Livro:
//   id (número único)
//   título (string)
//    autor (string)
//    ano (número)
//   gênero (string)