import  parser  from 'body-parser'
import  express  from 'express';

import { router } from './api/router.js'
import { sequelize } from './api/config/coneccion.js';

const app = express();

app.use(parser.json())

const routerExpress = express.Router();

router(routerExpress)

app.use(routerExpress)

const port = 9000;

sequelize
.authenticate()
.then(() => {
    console.log('Connection success');
    return sequelize.sync();
})
.then(() => {
    console.log('Sync models');
    app.listen(port, () => {
        console.log(`Server listen on http://localhost:${port}`);
    });
})
.catch((error) => {
    console.error('Connection fail', error);
});