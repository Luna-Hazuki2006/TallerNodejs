import { PokemonServicio } from "./PokemonServicio";
// interpretar la peticion y responder
// LA LÓGICA NO VA AQUÍ
class PokemonControlador {

    async Crear(request, response) {
        // así se obtiene el token
        // request.headers.authorization
        const servicio = new PokemonServicio()
        try {
            const {nombre, imagen, tipo, altura, peso, url, idubicacion} = request.body
            await servicio.Crear(nombre, imagen, tipo, altura, peso, url, idubicacion)
            response.status(200).send({mensaje: "Creaste un usario exitosamente"})

        } catch (error) {
            console.error(error)
            response.status(400).send({"error": "Hubo un problema al crear el pokemon"})
        }
    }

    async Modificar(request, response) {
        const servicio = new PokemonServicio()
        try {
            const {nombre, imagen, tipo, altura, peso, url, idubicacion} = request.body
            const id = request.params.id
            await servicio.Actualizar(id, nombre, imagen, tipo, altura, peso, url, idubicacion)
            response.status(200).send({mensaje: "Actualizaste al usuario exitósamente"})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al crear el pokemon"})
        }
    }

    async Obtener(request, response) {
        const servicio = new PokemonServicio()
        try {
            const todos = await servicio.Obtener()
            response.status(200).send({data: todos})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al obtener los pokemons"})
        }
    }

    async ObtenerUno(request, response) {
        const servicio = new PokemonServicio()
        try {
            const id = request.params.id
            const usuario = await servicio.ObtenerUno(id)
            response.status(200).send({data: usuario})
        } catch (error) {
            console.error(error);
            response.status(400).send({"error": "Hubo un problema al obtener el pokemon"})
        }
    }

    async Eliminar(request, response) {
        const servicio = new PokemonServicio()
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

export {PokemonControlador}