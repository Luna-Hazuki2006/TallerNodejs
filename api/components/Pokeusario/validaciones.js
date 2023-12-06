const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    if (!request.body.idpokemon) {
        next(new Error('Debe ingresar la id del pokemon'));
    }
    if (isNaN(request.body.idpokemon)) {
        next(new Error('La id del pokemon debe ser de tipo numérico'))
    }
    if (!request.body.idusuario) {
        next(new Error('Debe ingresar la id del usuario'))
    }
    if (!request.body.estado) {
        next(new Error('Debe ingresar el estado'))
    }
    if (!request.body.ubicacion_encuentro) {
        next(new Error('Debe ingresar la ubicación del encuentro'))
    }
    if (!request.body.fecha_encuentro) {
        next(new Error('Debe ingresar la fecha del encuentro'))
    }
    if (!request.body.apodo) {
        next(new Error('Debe ingresar el apodo pokemon'))
    }
    if (!request.body.favorito) {
        next(new Error('Debe ingresar si es favorito el pokemon'))
    }
    next()
} 

export {validarId, validarCuerpo}