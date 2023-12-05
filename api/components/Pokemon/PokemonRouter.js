import {PokemonControlador} from './PokemonControlador.js'

const router = (app) => {

    const controlador = new PokemonControlador()

    app.get('/pokemones', (request, response)=> {
        controlador.Obtener(request, response);
    });
    
    app.get('/pokemones/:id', (request, response)=> {
        controlador.ObtenerUno(request, response)
    })
    
    app.post('/pokemones', (request, response) => {
        controlador.Crear(request, response)        
    });
    
    app.put('/pokemones/:id', (request, response)=> {
        controlador.Modificar(request, response)
    })
    
    app.delete('/pokemones/:id', (request, response) =>{
        controlador.Eliminar(request, response);
    })
    
}

export default router;