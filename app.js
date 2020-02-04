const http = require('http');
let url = require('url');
const querystring = require('querystring');
//let test = require('./node_modules/test'); // Fait appel à test.js
//const markdown = require('./node_modules/markdown');
const express = require('./node_modules/express');

const hostname = '127.0.0.1';
const port = 3000;
/*
var markdown = require( "./node_modules/markdown" ).markdown;
console.log( markdown.toHTML( "Hello *World*!" ) );
*/
let app = express();

app.get('/index.html', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Accueil</h1>');
})

.get('/sous-sol', function(req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.send('<h1>Cave</h1>');
})

//  dernière route :
.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('<h1>Page introuvable !</h1>');
});

app.listen(3000);
/*
//import {markdown} from './node_modules/markdown';
//console.log( markdown.toHTML( "Hello *to World*!" ) );

const server = http.createServer((req, res) => {
  res.statusCode = 200;
//  test.direBonjour();
//  test.direByebye();
  //console.log(markdown.toHTML('Un paragraphe en **markdown** !'));
  */
/*    
  var EventEmitter = require('events').EventEmitter;
  var jeu = new EventEmitter();
  jeu.on('nouveau joueur', function(message){
        console.log(message);
    });
   
  jeu.emit('nouveau joueur', 'Mario 35');
*/
/*
  let params = querystring.parse(url.parse(req.url).query);
//  let page = url.parse(req.url).query;
    res.writeHead(200, {"Content-Type": "text/plain"});
    if('prenom' in params && 'nom' in params) {
        res.write('Bonjour '+params['prenom']+' '+params['nom']);
    } else {
        res.write('Aucun paramètre');
    }
*/
/*
    if (page == '/accueil') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    } else if (page == '/sous-sol') {
        res.write('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
    } else if (page == '/etage/1/chambre') {
        res.write('Hé ho, c\'est privé ici !');
    }
*/
/*
    res.end();
});
/*
let variable = $('#variable').onclick;
server.on('close', function() { // On écoute l'évènement close
    variable.innerHtml='Bye bye !';
//console.log('Bye bye !');
})
*/
/*
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

server.close();
*/

// https://openclassrooms.com/fr/courses/1056721-des-applications-ultra-rapides-avec-node-js/1057364-les-modules-node-js-et-npm




