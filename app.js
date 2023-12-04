//const express = require('express');
//const parser = require('body-parser');

import  parser  from 'body-parser'
import  express  from 'express';

import { router } from './api/router.js'

const app = express();

app.use(parser.json())

const routerExpress = express.Router();

router(routerExpress)

app.use(routerExpress)

const port = 9000;

app.listen(port, () => {
    console.log(`Aplicación corriendo en: http://127.0.0.1:${port}`)
})