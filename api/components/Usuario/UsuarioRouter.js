import {UsuarioControlador} from './UsuarioControlador.js'

const router = (app) => {

    const controlador = new UsuarioControlador()

    app.get('/usuarios', (request, response)=> {
        controlador.Obtener(request, response);
    });
    
    app.get('/usuarios/:id', (request, response)=> {
        controlador.ObtenerUno(request, response)
    })
    
    app.post('/usuarios', (request, response) => {
        controlador.Crear(request, response)        
    });
    
    app.put('/usuarios/:id', (request, response)=> {
        controlador.Modificar(request, response)
    })
    
    app.delete('/usuarios/:id', (request, response) =>{
        controlador.Eliminar(request, response);
    })
    
}

export default router;