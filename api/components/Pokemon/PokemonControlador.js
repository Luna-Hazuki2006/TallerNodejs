import fs from 'fs/promises'
import { fileURLToPath } from 'url';
import path from 'path'
let todo = []

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class flightController {

    async obtenerJson() {
        const ruta = path.join(__dirname, '../../data/flightsData.json')
        await fs.readFile(ruta, 'utf-8', async (err, contenido) => {
            if (err) {
                console.log(err);
                return false
            } else {
                todo = [...JSON.parse(contenido)]
                return true
            }
        })
        // try {
        //     const data  = await fs.readFile(ruta, 'utf-8')
        //     console.log(data)
        //     todo = [...JSON.parse(data)];
        //     return true;
        // }
        // catch(error) {
        //     console.error(error)
        //     return false
        // }
    }

    async escribirJson() {
        const ruta = path.join(__dirname, '../../data/flightsData.json')
        await fs.writeFile(ruta, JSON.stringify(todo), async (err) => {
            if (err) {
                console.log(err);
                return false
            } else {
                return true
            }
        })
    }

    async listar(request, response) {
        if (this.obtenerJson()) {
            response.status(200).send({data: todo})
        } else {
            response.status(400).send({'error': 'No se pudo encontrar el archivo json'})
        }
        // try {
        //     const resp = await this.obtenerJson()
        //     console.log(resp);
        //     console.log(todo);
        //     if(resp) {
        //         response.status(200).send({data: todo})
        //     } else {
        //         response.status(400).send({'error': 'No se pudo encontrar el archivo json'})
        //     }
        // }
        // catch(err) {
        //     response.status(500).send({'error': '¡Oh no! ha sucedido un erro catastrófico'})
        // }
    }

    consultar(request, response) {
        if (this.obtenerJson()) {
            const vuelo = todo.find(e => e.id == request.params.id)
            response.status(200).send({data: vuelo})
        } else {
            response.status(400).send({'error': 'No se pudo encontrar el archivo json'})
        }
    }

    crear(request, response) {
        const { horaSalida, horaLlegada, aeropuertoSalida, aeropuertoLlegada, paisOrigen, paisDestino, precio, equipaje } = request.body
        const vuelo = {horaSalida, horaLlegada, aeropuertoSalida, aeropuertoLlegada, paisOrigen, paisDestino, precio, equipaje}
        vuelo.id = Math.max(...todo.map(t => t.id)) + 1
        if (this.escribirJson()) {
            response.status(200).send({ message: `Producto creado exitosamente: ${request.body}` })
        } else {
            response.status(400).send({'error': 'No se pudo encontrar el archivo json'})
        }
    }

    modificar(request, response) {
        if (this.obtenerJson()) {
            const vuelo = todo.find(e => e.id == request.params.id)
            if (vuelo) {
                const { horaSalida, horaLlegada, aeropuertoSalida, aeropuertoLlegada, paisOrigen, paisDestino, precio, equipaje } = request.body
                vuelo.horaSalida = horaSalida
                vuelo.horaLlegada = horaLlegada
                vuelo.aeropuertoSalida = aeropuertoSalida
                vuelo.aeropuertoLlegada = aeropuertoLlegada
                vuelo.paisOrigen = paisOrigen
                vuelo.paisDestino = paisDestino
                vuelo.precio = precio
                vuelo.equipaje = equipaje
                if (this.escribirJson()) {
                    response.status(200).json({message: 'Vuelo modificado exitosamente'})
                } else {
                    response.status(400).json({'error': 'No se pudo escribir el archivo json'})
                }
            }
            response.status(400).send({'error': 'No se pudo encontrar el vuelo'})
        } else {
            response.status(400).send({'error': 'No se pudo encontrar el archivo json'})
        }
    }

    eliminar(request, response) {
        if (this.obtenerJson()) {
            const vuelo = todo.find(e => e.id == request.params.id)
            if (vuelo) {
                todo = todo.filter(e => e.id != request.params.id)
                if (console.escribirJson()) {
                    response.status(200).json({message: 'Vuelo eliminado exitosamente'})
                } else {
                    response.status(400).json({'error': 'No se pudo escribir el archivo json'})
                }
            }
            response.status(400).send({'error': 'No se pudo encontrar el vuelo'})
        } else {
            response.status(400).send({'error': 'No se pudo encontrar el archivo json'})
        }
    }

}

export {flightController}