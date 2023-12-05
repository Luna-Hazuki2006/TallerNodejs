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

}

export {PokeusaurioServicio}