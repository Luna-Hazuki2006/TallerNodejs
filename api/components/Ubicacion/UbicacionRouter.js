import {UbicacionControlador} from './UbicacionControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new UbicacionControlador()

    app.get('/ubicaciones', controlador.Obtener);
    
    app.get('/ubicaciones/:id', validarId, controlador.ObtenerUno)
    
    app.post('/ubicaciones', validarCuerpo, controlador.Crear);
    
    app.put('/ubicaciones/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/ubicaciones/:id', validarId, controlador.Eliminar)
    
}

export default router;