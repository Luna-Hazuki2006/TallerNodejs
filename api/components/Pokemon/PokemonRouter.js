import {PokemonControlador} from './PokemonControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new PokemonControlador()

    app.get('/pokemones', controlador.Obtener);
    
    app.get('/pokemones/:id', validarId, controlador.ObtenerUno)
    
    app.post('/pokemones', validarCuerpo, controlador.Crear);
    
    app.put('/pokemones/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/pokemones/:id', validarId, controlador.Eliminar)
    
}

export default router;