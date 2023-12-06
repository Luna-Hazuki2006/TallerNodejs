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
   
    async Crear(idUser, token, login){
        try{
            return await Sesiones.create({
                idUser,
                token,
                login
            })
        }
        catch(error) {
            throw error
        }
    }

    async Actualizar(idUser, token, login){
        try{
            return await Sesiones.update({
                idUser,
                token,
                login
            }, {where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async ObtenerUno(id) {
        try {
            return await Sesiones.findOne({where: {id: id}})

        } catch (error) {
            throw error
        }
    }

}

export {SesionServicio}