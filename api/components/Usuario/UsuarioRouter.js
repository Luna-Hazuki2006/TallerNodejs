import {UsuarioControlador} from './UsuarioControlador.js'
import {ValidAuthor} from './validaciones.js'

const router = (app) => {

    const controlador = new UsuarioControlador()

    app.get('/usuarios', controlador.obtener);
    
    app.get('/usuarios/:id', (request, response)=> {
        // controlador.ObtenerUno(request, response)
    })
    
    app.post('/usuarios', controlador.Crear);
    
    app.put('/usuarios/:id', controlador.Modificar)
    
    app.delete('/usuarios/:id', (request, response) =>{
        // controlador.Eliminar(request, response);
    })
    
}

export default router;