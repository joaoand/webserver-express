const { text } = require('express');
const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helper')

const port = process.env.PORT || 3000;
//Lo que se coloque en esta carpeta es de acceso público 
//ya sea html, css, javascript, etc
app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {

    // res.send('Hola mundo');
    res.render('home', {
        nombre: 'JoAo DE MATA',


    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        superPerro: 'Cromosoma XX',
    });
});

// Solo se van a escuchar peticiones de / 
// app.get('/', function(req, res) {
//     let salida = {
//         nombre: 'Joao',
//         edad: 20,
//         url: req.url
//     };
//     // res.send('Hola mundo');
//     res.send(salida);
// });

// app.get('/data', function(req, res) {
//     let salida = {
//         nombre: 'Joao',
//         edad: 20,
//         url: req.url
//     };
//     // res.send('Hola mundo');
//     res.send(salida);
// });

//heroku da un puerto 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port} `);
});