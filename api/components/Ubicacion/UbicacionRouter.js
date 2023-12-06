import {UbicacionControlador} from './UbicacionControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new UbicacionControlador()

    app.get('/ubicaciones');
    
    app.get('/ubicaciones/:id', validarId)
    
    app.post('/ubicaciones', validarCuerpo);
    
    app.put('/ubicaciones/:id', validarId, validarCuerpo)
    
    app.delete('/ubicaciones/:id', validarId)
    
}

export default router;