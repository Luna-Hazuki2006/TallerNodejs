import {PokeusarioControlador} from './PokeusuarioControlador.js'

const router = (app) => {

    const controlador = new PokeusarioControlador()

    app.get('/Pokeusuarios', (request, response)=> {
        controlador.Obtener(request, response);
    });
    
    app.get('/Pokeusuarios/:id', (request, response)=> {
        controlador.ObtenerUno(request, response)
    })
    
    app.post('/Pokeusuarios', (request, response) => {
        controlador.Crear(request, response)        
    });
    
    app.put('/Pokeusuarios/:id', (request, response)=> {
        controlador.Modificar(request, response)
    })
    
    app.delete('/Pokeusuarios/:id', (request, response) =>{
        controlador.Eliminar(request, response);
    })
    
}

export default router;