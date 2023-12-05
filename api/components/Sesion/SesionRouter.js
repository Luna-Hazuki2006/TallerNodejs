import {SesionControlador} from './SesionControlador.js'

const router = (app) => {

    const controlador = new SesionControlador()

    app.get('/sesiones', (request, response)=> {
        controlador.Obtener(request, response);
    });
    
    app.get('/sesiones/:id', (request, response)=> {
        controlador.ObtenerUno(request, response)
    })
    
    app.post('/sesiones', (request, response) => {
        controlador.Crear(request, response)        
    });
    
    app.put('/sesiones/:id', (request, response)=> {
        controlador.Modificar(request, response)
    })
    
    app.delete('/sesiones/:id', (request, response) =>{
        controlador.Eliminar(request, response);
    })
    
}

export default router;