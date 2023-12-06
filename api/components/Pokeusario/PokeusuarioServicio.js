import { Pokeusario } from "./PokeusuarioModelo.js"

class PokeusaurioServicio {

    async Obtener() {
        try{
            return await Pokeusario.findAll()
        }
        catch(error) {
            throw error
        }
    }
   
    async Crear(idpokemon, idusuario, estado, ubicacion_encuentro, 
                fecha_encuentro, apodo, favorito){
        try{
            return await Pokeusario.create({
                idpokemon,
                idusuario,
                estado,
                ubicacion_encuentro, 
                fecha_encuentro, 
                apodo, 
                favorito
            })
        }
        catch(error) {
            throw error
        }
    }

    async Actualizar(id, idpokemon, idusuario, estado, ubicacion_encuentro, 
        fecha_encuentro, apodo, favorito){
        try{
            return await Pokeusario.update({
                idpokemon,
                idusuario,
                estado,
                ubicacion_encuentro, 
                fecha_encuentro, 
                apodo, 
                favorito
            }, {where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(id) {
        try{
            return await Pokeusario.destroy({where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async ObtenerUno(id) {
        try {
            return await Pokeusario.findOne({where: {id: id}})

        } catch (error) {
            throw error
        }
    }

}

export {PokeusaurioServicio}