const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser de tipo fecha'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    if (!request.body.nombre) {
        next(new Error('Debe ingresar el nombre'));
    }
    if (!request.body.apellido) {
        next(new Error('Debe ingresar el apellido'))
    }
    if (!request.body.correo) {
        next(new Error('Debe ingresar el correo'))
    }
    if (!request.body.contraseña) {
        next(new Error('Debe ingresar la contraseña'))
    }
    if (!request.body.cedula) {
        next(new Error('Debe ingresar la cédula'))
    }
    next()
} 

export {validarId, validarCuerpo}