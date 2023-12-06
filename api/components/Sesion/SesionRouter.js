import {SesionControlador} from './SesionControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new SesionControlador()

    app.get('/sesiones');
    
    app.get('/sesiones/:id', validarId)
    
    app.post('/sesiones', validarCuerpo);
    
    app.put('/sesiones/:id', validarId, validarCuerpo)
    
    app.delete('/sesiones/:id', validarId)
    
}

export default router;