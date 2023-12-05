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
   
    async Crear(id, nombre, descripcion, estatus){
        try{
            return await Ubicaciones.create({
                id,
                nombre,
                descripcion,
                estatus
            })
        }
        catch(error) {
            throw error
        }
    }

}

export {UbicacionServicio}