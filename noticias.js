var http = require('http');

var server = http.createServer( function(req, res){

    var categoria = req.url;//recuperando a requisição url

    if(categoria == '/tecnologia'){
        es.end("<html><body>Portal de tecnologia</body></html>");
    } else if (categoria == '/moda') {
        es.end("<html><body>Portal de moda</body></html>");
    } else if (categoria == '/beleza') {
        es.end("<html><body>Portal de beleza</body></html>");
    } else {
        es.end("<html><body>Portal de noticias</body></html>");
    }

});

server.listen(3000);//Escutar o servidor na porta 3000