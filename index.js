const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const port = 3000;

const api = express();

const router = express.Router();
const portifolio_router = require('./router/portifolio_router');

api.use(cors());

api.use(bodyparser.urlencoded({ extended: true }));
api.use(bodyparser.json());

router.get('/', (req, res) => res.json({mensagem: 'Hello World!'}));

api.use('/', router);
api.use('/portifolio', portifolio_router);

api.listen(port);
console.log('API rodando em localhost na porta', port);