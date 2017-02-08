var config = require('./config.js'), server = require('./server.js');
config.forEach(function(i){
    server(i.ip, i.container);
});