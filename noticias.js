var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;//recuperando a requisição url
    res.end("<html><body>Portal de noticias</body></html>");

});

server.listen(3000);//Escutar o servidor na porta 3000