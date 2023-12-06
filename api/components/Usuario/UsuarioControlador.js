import { UsuarioServicio } from "./UsuarioServicio";
// interpretar la peticion y responder
// LA LÓGICA NO VA AQUÍ
class UsuarioControlador {

    async Crear(request, response) {
        // así se obtiene el token
        // request.headers.authorization
        const servicio = new UsuarioServicio()
        try {
            const {nombre, apellido, correo, contraseña, cedula} = request.body
            await servicio.Crear(nombre, apellido, correo, contraseña, cedula)
            response.status(200).send({mensaje: "Creaste un usario exitosamente"})

        } catch (error) {
            console.error(error)
            response.status(400).send({"error": "Hubo un problema al crear el usuario"})
        }
    }

    async Modificar(request, response) {
        const servicio = new UsuarioServicio()
        try {
            const {nombre, apellido, correo, contraseña, cedula} = request.body
            const id = request.params.id
            await servicio.Actualizar(id, nombre, apellido, correo, contraseña, cedula)
            response.status(200).send({mensaje: "Actualizaste al usuario exitósamente"})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al crear el usuario"})
        }
    }

    async Obtener(request, response) {
        const servicio = new UsuarioServicio()
        try {
            const todos = await servicio.Obtener()
            response.status(200).send({data: todos})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al obtener los usuarios"})
        }
    }

    async ObtenerUno(request, response) {
        const servicio = new UsuarioServicio()
        try {
            const id = request.params.id
            const usuario = await servicio.ObtenerUno(id)
            response.status(200).send({data: usuario})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al obtener el usuario"})
        }
    }

    async Eliminar(request, response) {
        const servicio = new UsuarioServicio()
        try {
            const id = request.params.id
            await servicio.Eliminar(id)
            response.status(200).send({mensaje: "Eliminaste al usuario exitósamente"})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al eliminar el usario"})
        }
    }

}

export {UsuarioControlador}