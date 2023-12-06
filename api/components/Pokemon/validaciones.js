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
    if (!request.body.nombre) {
        next(new Error('Debe ingresar el nombre'));
    }
    if (!request.body.imagen) {
        next(new Error('Debe ingresar la imagen'))
    }
    if (!request.body.tipo) {
        next(new Error('Debe ingresar el tipo'))
    }
    if (!request.body.altura) {
        next(new Error('Debe ingresar la altura'))
    }
    if (isNaN(request.body.altura)) {
        next(new Error('La altura debe ser de tipo numérico'))
    }
    if (!request.body.peso) {
        next(new Error('Debe ingresar el peso'))
    }
    if (isNaN(request.body.peso)) {
        next(new Error('El peso debe ser de tipo numérico'))
    }
    if (!request.body.url) {
        next(new Error('Debe ingresar el url'))
    }
    if (!request.body.idUbicacion) {
        next(new Error('Debe ingresar la id de la ubicación'))
    }
    if (isNaN(request.body.idUbicacion)) {
        next(new Error('La id de la ubicación tiene que ser de tipo numérica'))
    }
    next()
} 

export {validarId, validarCuerpo}