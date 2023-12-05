import {UsuarioControlador} from './UsuarioControlador.js'

const router = (app) => {

    const controlador = new UsuarioControlador()

    app.get('/usuarios', controlador.obtener);
    
    app.get('/usuarios/:id', (request, response)=> {
        // controlador.ObtenerUno(request, response)
    })
    
    app.post('/usuarios', controlador.crear);
    
    app.put('/usuarios/:id', controlador.modificar)
    
    app.delete('/usuarios/:id', (request, response) =>{
        // controlador.Eliminar(request, response);
    })
    
}

export default router;