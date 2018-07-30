//This file isn't transpiled so it must use CommonJS & ES5

//Register babel to transpile before running tests
require('babel-register')();

//Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};