var express = require('express');
var app = express();

//setando o gerador de view (onde será o EJS)
app.set('view engine', 'ejs');

app.get('/tecnologia', function(req, res){
    res.render("secao/tecnologia")
});

app.get('/', function(req, res){
    res.send("<html><body>Portal de Noticias</body></html>")
});


//Fica escutando na porta 3000
app.listen(3000, function(){
    console.log("Servidor Rodando com express");
});