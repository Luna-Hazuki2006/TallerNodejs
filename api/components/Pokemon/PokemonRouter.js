import {PokemonControlador} from './PokemonControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new PokemonControlador()

    app.get('/pokemones');
    
    app.get('/pokemones/:id', validarId)
    
    app.post('/pokemones', validarCuerpo);
    
    app.put('/pokemones/:id', validarId, validarCuerpo)
    
    app.delete('/pokemones/:id', validarId)
    
}

export default router;