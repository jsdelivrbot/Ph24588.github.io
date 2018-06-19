// server.js
// load the things we need
var express = require('express');
var app = express();

// app.set('port', (process.env.PORT || 5000));

// For avoidong Heroku $PORT error
// app.get('/', function(request, response) {
//     var result = 'App is running'
//     response.send(result);
// }).listen(app.get('port'), function() {
//     console.log('App is running, server is listening on port ', app.get('port'));
// });

// set the view engine to ejs
app.set('view engine', 'ejs');

// find things in public folder
app.use(express.static('public'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// UX PROJECTS
// Beatblocks
app.get('/beat-blocks', function(req, res) {
    res.render('pages/ux/beat-blocks');
});

app.get('/beat-blocks/prototype', function(req, res) {
    res.render('pages/ux/beat-blocks-prototype');
});
// Amazon
app.get('/amazon', function(req, res) {
    res.render('pages/ux/amazon');
});
// Apple Music
app.get('/apple-music', function(req, res) {
    res.render('pages/ux/apple-music');
});
// Pupper
app.get('/pupper', function(req, res) {
    res.render('pages/ux/pupper');
});
// Agio
app.get('/agio', function(req, res) {
    res.render('pages/ux/agio');
});
// Cooleaf
app.get('/jpex', function(req, res) {
    res.render('pages/ux/jpex');
});

// VISUAL PROJECTS
// SSRL
app.get('/ssrl', function(req, res) {
    res.render('pages/visual/ssrl');
});
// Ocean Plastics
app.get('/ocean-plastics', function(req, res) {
    res.render('pages/visual/ocean-plastics');
});
// Alserkal Arrows
app.get('/alserkal-arrows', function(req, res) {
    res.render('pages/visual/alserkal-arrows');
});
// UGA Hacks
app.get('/uga-hacks', function(req, res) {
    res.render('pages/visual/uga-hacks');
});
// Shape Animations
app.get('/shape-animations', function(req, res) {
    res.render('pages/visual/shape-animations');
});
// AstroVisual
app.get('/astrovisual', function(req, res) {
    res.render('pages/visual/astrovisual');
});

app.listen(5000);
console.log('5000 is the magic port');