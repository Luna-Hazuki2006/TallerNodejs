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

}

export {UsuarioServicio}