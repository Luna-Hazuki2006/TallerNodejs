
import { PokemonServicio } from "./PokemonServicio.js";
class BookController {

    Obtener(request, response){
        try{
            const servicio = new PokemonServicio();
            const books = servicio.Obtener();
            if(books){
                response.status(200).json({data: books});
            }
            else{
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error){
            response.status(500).send(error)
        }
    }

    Crear(request, response){

        try{
            const servicio = new PokemonServicio();
            const {isbn, name,cantPages, author} = request.body;
            const book = servicio.Crear(isbn, name,cantPages,author);
            if(book){
                response.status(200).json({data: book});
            }
            else{
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error){
            response.status(500).send(error)
        }
    }
}

export {BookController};