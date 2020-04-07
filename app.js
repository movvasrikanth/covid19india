// require("./api/data/db.js");
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var path = require('path');

var routes = require('./api/routes');
var port = process.env.PORT || 3003;

var app = express();
app.use(cors())
app.use(express.static(path.join(__dirname, 'dist')));

app.set('view engine', 'ejs')

app.use(bodyParser.json());
/* app.use(function(req, res, next) {
    console.log('req.url--'+req.url);

    next();
}); */
app.use('/api/', routes);

// app.get('/view', function(req, res){
//   res.render('covid19_india');
// })

app.listen(port, function(){
    console.log("Server running on localhost:" + port);
});
