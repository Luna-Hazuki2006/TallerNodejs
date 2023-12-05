import PokemonRouter from './components/Pokemon/PokemonRouter.js'
import PokeusarioRouter from './components/Pokeusario/PokeusuarioRouter.js'
import SesionRouter from './components/Sesion/SesionRouter.js'
import UbicacionRouter from './components/Ubicacion/UbicacionRouter.js'
import UsuarioRouter from './components/Usuario/UsuarioRouter.js'

const router = (app) => {
    PokemonRouter(app)
    PokeusarioRouter(app)
    SesionRouter(app)
    UbicacionRouter(app)
    UsuarioRouter(app)
}

export {router}