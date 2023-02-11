'use strict'

function registrarRotasCliente(server) {
    var baseUrl = '/clientes';

    var clientes = [
        {
            nome: 'Paulo',
            cidade: 'Monte Alto',
            uf: 'SP',
            endereco: 'Rua 123, 123'
        },
        {
            nome: 'Zuchi',
            cidade: 'Monte Alto',
            uf: 'SP',
            endereco: 'Rua ABCDE, 123'
        },
        {
            nome: 'Manoel',
            cidade: 'Araraquara',
            uf: 'SP',
            endereco: 'Rua ueueue, 123'
        },
        {
            nome: 'Valetim',
            cidade: 'Taquaritinga',
            uf: 'SP',
            endereco: 'Rua mna, 123'
        },
        {
            nome: 'John doe',
            cidade: 'Sei lá',
            uf: 'DC',
            endereco: 'XXX, YYY'
        }
    ];

    server.get(baseUrl, function (req, res, next) {
        console.log("Recebendo requisições de get em /clientes");
        res.json(200, clientes);
    });

    server.get(baseUrl + '/:id', function (req, res, next) {
        res.json(200, req.params.id);
    });

    server.post(baseUrl, function (req, res, next) {

        console.log('Salvando requisições em clientes...');
        var obj = req.body;
        console.log(obj);
        clientes.push(obj);
        res.json(201, obj);
    });

    server.post(baseUrl + '/:id/telefones/', function(req, res, next){
       console.log('Salvando o telefone do cliente ' + req.params.id + " com os dados " + req.body);
       res.json(200, "{}");
    });

    server.get(baseUrl, function (req, res , next) {
     console.log("recebendo requisições de get em /clientes ");
     setTimeout(() => {
         res.json(200,clientes);
     }, 1 * 1000)

});

server.post(baseUrl, function (req , res , next ) {
    console.log("Caindo no verbo post na uri /clientes");
    let cliente=req.body;
    if(cliente !== undefined)
        {
            clientes.push(cliente);
        }
        res.json(200,{message:"OK, Cliente cadastrado"});
});
}
 

module.exports = registrarRotasCliente;


