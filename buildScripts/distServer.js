import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3001;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res){
    res.json([
        {"id": 1, "firstname": "Bob", "lastname": "Smith", "email": "bob@gmail.com"},
        {"id": 2, "firstname": "Swaggy", "lastname": "C", "email": "swaggy@gmail.com"},
        {"id": 3, "firstname": "Rockstar", "lastname": "Jones", "email": "rockstar@gmail.com"},
        {"id": 4, "firstname": "Brett", "lastname": "Bro", "email": "brett@gmail.com"},
        {"id": 5, "firstname": "Tyler", "lastname": "Durden", "email": "tyler@gmail.com"},
    ]);
});

app.listen(port, function(err) {
    if(err) { console.log(err); }
    else {
        open('http://localhost:' + port);
    }
})

