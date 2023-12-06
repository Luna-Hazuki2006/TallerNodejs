import { SesionServicio } from "./SesionServicio";
// interpretar la peticion y responder
// LA LÓGICA NO VA AQUÍ
class SesionControlador {

    async Crear(request, response) {
        // así se obtiene el token
        // request.headers.authorization
        const servicio = new SesionServicio()
        try {
            const {nombre, descripcion, estatus} = request.body
            await servicio.Crear(nombre, descripcion, estatus)
            response.status(200).send({mensaje: "Creaste un usario exitosamente"})

        } catch (error) {
            console.error(error)
            response.status(400).send({"error": "Hubo un problema al crear la sesión"})
        }
    }

    async Modificar(request, response) {
        const servicio = new SesionServicio()
        try {
            const {nombre, descripcion, estatus} = request.body
            const id = request.params.id
            await servicio.Actualizar(id, nombre, descripcion, estatus)
            response.status(200).send({mensaje: "Actualizaste al usuario exitósamente"})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al crear la sesión"})
        }
    }

    async Obtener(request, response) {
        const servicio = new SesionServicio()
        try {
            const todos = await servicio.Obtener()
            response.status(200).send({data: todos})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al obtener las sesiones"})
        }
    }

    async ObtenerUno(request, response) {
        const servicio = new SesionServicio()
        try {
            const id = request.params.id
            const usuario = await servicio.ObtenerUno(id)
            response.status(200).send({data: usuario})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al obtener la sesión"})
        }
    }

}

export {SesionControlador}