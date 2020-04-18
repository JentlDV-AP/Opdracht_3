// Express toevoegen aan Node.js
const express = require('express');
const app = express();

// Bib inladen om paden naar folder te maken
const path = require('path');

// Applicatiepoort instellen
const port = 5000;

// EJS configureren
app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

// Public map
app.use(express.static('public'));

// Data inladen
const kunstwerkenposts = require('./data/kunstwerken.json');

// Weg naar "homepagina"
app.get('/', function(req,res){
  res.render('home', {
    posts: kunstwerkenposts.kunstwerk
  });
});

// Detailpagina van een kunstwerkpost
app.get('/overzicht/:postid', function(req,res){
  res.render('detailpagina', {
    post: kunstwerkenposts.kunstwerk[req.params.postid]
  });
});

//Contactpagina
app.get("/contact", function(req,res){
  res.render("contact");
});

// Overzichtspagina (tentoonstelling kunstwerken)
app.get("/overzicht", function(req,res){
  res.render("overzicht", {
    // Array van portfolioberichten doorgeven aan de renderfunctie om op de homepagina te tonen.
    posts: kunstwerkenposts.kunstwerk
  });
});


app.set('port', (process.env.PORT || 5000));

// Heroku poort instellingen
app.listen(app.get('port'), function() {
  console.log('Luister op poort: ' + port)
});









/* const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views',  path.resolve(__dirname, 'views'));

app.use(express.static('public'));

const kunstwerkenposts = require('./data/kunstwerken.json');

app.get('/', function(req, res){
	res.render('home',{
		post: kunstwerkenposts.home[req.params.postid]
	});
});

app.get("/contact", function(req, res){
  res.render("contact");
});

app.get("/overzicht", function(req, res){
	res.render('overzicht',{
		posts: kunstwerkenposts.overzicht
	});
});

app.get("/kunstwerkpost", function(req, res){
	res.render('kunstwerkpost',{
		post: kunstwerkenposts.overzicht[req.params.postid]
	});
});

/* app.get('/campus/:id', function(req, res){
  res.render('campus',{
    campus: data.campussen[req.params.id]
  });
}); */

/*
app.listen(port, function(){
  console.log('luister op poort: ' + port)
}); */
