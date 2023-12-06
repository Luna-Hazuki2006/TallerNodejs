import { Ubicaciones } from "./UbicacionModelo.js"

class UbicacionServicio {

    async Obtener() {
        try{
            return await Ubicaciones.findAll()
        }
        catch(error) {
            throw error
        }
    }
   
    async Crear(nombre, descripcion, estatus){
        try{
            return await Ubicaciones.create({
                nombre,
                descripcion,
                estatus
            })
        }
        catch(error) {
            throw error
        }
    }

    async Actualizar(id, nombre, descripcion, estatus){
        try{
            return await Ubicaciones.update({
                nombre,
                descripcion, 
                estatus
            }, {where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Ubicaciones.update({estatus: 'I'}, {where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async ObtenerUno(id) {
        try {
            return await Ubicaciones.findOne({where: {id: id}})

        } catch (error) {
            throw error
        }
    }

}

export {UbicacionServicio}