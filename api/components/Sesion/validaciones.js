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
    if (!request.body.idUser) {
        next(new Error('Debe ingresar la id del usuario'));
    }
    if (isNaN(request.body.idUser)) {
        next(new Error('La id del usuario debe ser de tipo numérico'))
    }
    if (!request.headers.authorization.token) {
        next(new Error('Debe ingresar el token'))
    }
    if (!request.body.login) {
        next(new Error('Debe ingresar el login'))
    }
    next()
} 

export {validarId, validarCuerpo}