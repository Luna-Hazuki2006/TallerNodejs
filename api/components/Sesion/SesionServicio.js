import { Sesiones } from "./SesionModelo.js"

class SesionServicio {

    async Obtener() {
        try{
            return await Sesiones.findAll()
        }
        catch(error) {
            throw error
        }
    }
   
    async Crear(id, idUser, token, login){
        try{
            return await Sesiones.create({
                id,
                idUser,
                token,
                login
            })
        }
        catch(error) {
            throw error
        }
    }

}

export {SesionServicio}