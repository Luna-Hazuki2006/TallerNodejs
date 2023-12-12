import { Pokemon } from "./PokemonModelo.js"
import { Ubicaciones } from "../Ubicacion/UbicacionModelo.js"

class PokemonServicio {

    async Obtener() {
        try {
            return await Pokemon.findAll({
                include: [
                    {
                        model: Ubicaciones,
                        as: 'ubicacion',
                        attributes: ['id', 'nombre', 'descripcion', 'estatus', 'createdAt']
                    },
                ],
            })
        } 
        catch(error) {
            throw error
        }
    }
   
    async Crear(nombre, imagen, tipo, altura, peso, url, idubicacion){
        try{
            return await Pokemon.create({
                nombre,
                imagen,
                tipo,
                altura, 
                peso, 
                url, 
                idubicacion
            })
        }
        catch(error) {
            throw error
        }
    }

    async Actualizar(id, nombre, imagen, tipo, altura, peso, url, idubicacion){
        try{
            return await Pokemon.update({
                nombre,
                imagen,
                tipo,
                altura, 
                peso, 
                url, 
                idubicacion
            }, {where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(id) {
        try{
            return await Pokemon.destroy({where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async ObtenerUno(id) {
        try {
            return await Pokemon.findOne({where: {id: id}})

        } catch (error) {
            throw error
        }
    }

}

export {PokemonServicio}