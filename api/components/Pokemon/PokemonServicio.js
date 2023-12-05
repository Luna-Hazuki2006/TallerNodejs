import { Pokemon } from "./PokemonModelo.js"

class PokemonServicio {

    async Obtener() {
        try{
            return await Pokemon.findAll()
        }
        catch(error) {
            throw error
        }
    }
   
    async Crear(nombre, imagen, tipo, altura, peso, url, id, idubicacion){
        try{
            return await Pokemon.create({
                nombre,
                imagen,
                tipo,
                altura, 
                peso, 
                url, 
                id, 
                idubicacion
            })
        }
        catch(error) {
            throw error
        }
    }

}

export {PokemonServicio}