import {SesionControlador} from './SesionControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new SesionControlador()

    app.get('/sesiones', controlador.Obtener());
    
    app.get('/sesiones/:id', validarId, controlador.ObtenerUno)
    
    app.post('/sesiones', validarCuerpo, controlador.Crear);
    
    app.put('/sesiones/:id', validarId, validarCuerpo, controlador.Modificar)
    
}

export default router;