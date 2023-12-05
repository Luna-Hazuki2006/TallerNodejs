import { Author } from "../.js"
import { Book } from "../books/model.js"
class BookService {

    async Obtener(){
        try{
            return await Book.findAll()
        }
        catch(error){
            throw error
        }
    }
   
    async Crear(isbn, name,cantPages,authorId){
        try{
            return await Book.create({
                isbn,
                name,
                cantPages,
                authorId
              })
        }
        catch(error){
            throw error
        }
    }

}

export {BookService}