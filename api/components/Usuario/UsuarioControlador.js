import { UsuarioServicio } from "./UsuarioServicio";
// interpretar la peticion y responder
class UsuarioControlador {

    async Crear(request, response) {
        const servicio = new UsuarioServicio()
        try {
            const {nombre, apellido, correo, contraseña, cedula} = request.body
            await servicio.Crear(nombre, apellido, correo, contraseña, cedula)
            response.status(200).send({mensaje: "Creaste un usario exitosamente"})

        } catch (error) {
            console.error(error)
            response.status(400).send({error: "Hubo un problema al crear el usario"})
        }
    }

}

export {UsuarioControlador}