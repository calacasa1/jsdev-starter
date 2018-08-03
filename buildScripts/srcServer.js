import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3001;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
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

