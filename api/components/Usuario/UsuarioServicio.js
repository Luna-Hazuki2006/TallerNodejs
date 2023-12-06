import { Usuario } from "./UsuarioModelo.js"

class UsuarioServicio {

    async Obtener() {
        try{
            return await Usuario.findAll()
        }
        catch(error) {
            throw error
        }
    }
   
    async Crear(nombre, apellido, correo, contraseña, 
                id, cedula){
        try{
            return await Usuario.create({
                nombre,
                apellido,
                correo,
                contraseña, 
                id, 
                cedula
            })
        }
        catch(error) {
            throw error
        }
    }

    async Actualizar(id, nombre, apellido, correo, 
        contraseña, cedula){
        try{
            return await Usuario.update({
                nombre,
                apellido,
                correo,
                contraseña, 
                cedula
            }, {where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async Eliminar(id) {
        try{
            return await Usuario.destroy({where: {id: id}}) // solo pasar eso en los otros
        }
        catch(error) {
            throw error
        }
    }

    async ObtenerUno(id) {
        try {
            return await Usuario.findOne({where: {id: id}})

        } catch (error) {
            throw error
        }
    }

}

export {UsuarioServicio}