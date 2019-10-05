const express = require('express');

const router = express.Router();

const PortfolioModel = require('../model/portifolio/PortfolioModel');
const RespostaClass = require('../model/RespostaClass');

router.get('/', (req, res, next) => {

    PortfolioModel.getTodos((erro, retorno) => {

        let resposta = new RespostaClass();

        if (erro) {

            resposta.erro = true;
            resposta.mensagem = 'Ocorreu um erro!'
            console.log('erro: ', erro);

        } else {

            resposta.dados = retorno;
            resposta.mensagem = 'Query Ok!'
        }
        res.json(resposta);
    });
});

router.get('/:id?', (req, res, next) => {

    PortfolioModel.getId(req.params.id, (erro, retorno) => {

        let resposta = new RespostaClass();

        if (erro) {

            resposta.erro = true;
            resposta.mensagem = 'Ocorreu um erro!'
            console.log('erro: ', erro);

        } else {

            resposta.dados = retorno;
            resposta.mensagem = 'Query Ok!'
        }
        res.json(resposta);
    });
});

router.post('/?', (req, res, next) => {

    PortfolioModel.adicionar(req.body, (erro, retorno) => {

        let resposta = new RespostaClass();

        if (erro) {

            resposta.erro = true;
            resposta.mensagem = 'Ocorreu um erro!'
            console.log('erro: ', erro);

        } else {

            if (retorno.affectedRows > 0) {

                resposta.mensagem = "Cadastro realizado com sucesso!"

            } else {

                resposta.erro = true;
                resposta.mensagem = "Não foi possível realizar a operação!"
            }
        }
        console.log('body: ', req.body);
        res.json(resposta);
    });
});

router.delete('/:id?', (req, res, next) => {

    PortfolioModel.deletar(req.params.id, (erro, retorno) => {

        let resposta = new RespostaClass();

        if (erro) {

            resposta.erro = true;
            resposta.mensagem = 'Ocorreu um erro!'
            console.log('erro: ', erro);

        } else {

            resposta.mensagem = 'Deletado com sucesso!'
        }
        res.json(resposta);
    });
});

router.put('/', (req, res, next) => {

    PortfolioModel.atualizar(req.body, (erro, retorno) => {

        let resposta = new RespostaClass();

        if (erro) {

            resposta.erro = true;
            resposta.mensagem = 'Ocorreu um erro!'
            console.log('erro: ', erro);

        } else {

            if (retorno.affectedRows > 0) {

                resposta.mensagem = "Atualizado com sucesso!"

            } else {

                resposta.erro = true;
                resposta.mensagem = "Não foi possível realizar a operação!"
            }
        }
        console.log('body: ', req.body);
        res.json(resposta);
    });
});

module.exports = router;