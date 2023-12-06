import {UbicacionControlador} from './UbicacionControlador.js'
import {validarId, validarCuerpo} from './validaciones.js'

const router = (app) => {

    const controlador = new UbicacionControlador()

    app.get('/ubicaciones', controlador.ObtenerUno);
    
    app.get('/ubicaciones/:id', (request, response)=> {
        controlador.ObtenerUno(request, response)
    })
    
    app.post('/ubicaciones', (request, response) => {
        controlador.Crear(request, response)        
    });
    
    app.put('/ubicaciones/:id', (request, response)=> {
        controlador.Modificar(request, response)
    })
    
    app.delete('/ubicaciones/:id', (request, response) =>{
        controlador.Eliminar(request, response);
    })
    
}

export default router;