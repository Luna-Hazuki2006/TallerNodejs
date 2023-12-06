import {PokeusarioControlador} from './PokeusuarioControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new PokeusarioControlador()

    app.get('/Pokeusuarios');
    
    app.get('/Pokeusuarios/:id', validarId)
    
    app.post('/Pokeusuarios', validarCuerpo);
    
    app.put('/Pokeusuarios/:id', validarId, validarCuerpo)
    
    app.delete('/Pokeusuarios/:id', validarId)
    
}

export default router;