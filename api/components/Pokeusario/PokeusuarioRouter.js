import {PokeusuarioControlador} from './PokeusuarioControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new PokeusuarioControlador()

    app.get('/Pokeusuarios', controlador.Obtener);
    
    app.get('/Pokeusuarios/:id', validarId, controlador.ObtenerUno)
    
    app.post('/Pokeusuarios', validarCuerpo, controlador.Crear);
    
    app.put('/Pokeusuarios/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Pokeusuarios/:id', validarId, controlador.Eliminar)
    
}

export default router;