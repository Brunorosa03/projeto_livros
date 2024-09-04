let proxId = 1

const model = (body, id = proxId++) => {
    console.log(body)
    if(
        body.nome != undefined &&
        body.matricula != undefined &&
        body.ano != undefined &&
        body.curso != undefined &&
        body.nome != "" &&
        body.matricula != "" &&
        body.ano != "" &&
        body.curso != "" 

    ) {
        return {
            id,
            Título: body.nome,
            Autor:  body.matricula,
            Ano:    body.ano,
            Gênero: body.curso

        }
    }
}

module.exports = model
