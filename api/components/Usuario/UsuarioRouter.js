import {UsuarioControlador} from './UsuarioControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new UsuarioControlador()

    app.get('/usuarios', validarCuerpo, controlador.Obtener);
    
    app.get('/usuarios/:id', validarId, controlador.ObtenerUno)
    
    app.post('/usuarios', validarCuerpo, controlador.Crear);
    
    app.put('/usuarios/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/usuarios/:id', validarId, controlador.Eliminar)
    
}

export default router;