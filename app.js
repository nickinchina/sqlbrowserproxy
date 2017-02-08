var proxy = require('./index.js'),
    options = {
        address: '172.22.192.2',
        port: 1434,
        ipv6: false,
        localaddress: '10.0.0.121',
        localport: 1434,
        localipv6: false,
        proxyaddress: '::0',
        timeOutTime: 10000
    };

// This is the function that creates the server, each connection is handled internally
var server = proxy.createServer(options);

// this should be obvious
server.on('listening', function (details) {
    console.log('DNS - IPv4 to IPv6 proxy }>=<{ by: ok 2012');
    console.log('udp-proxy-server ready on ' + details.server.family + '  ' + details.server.address + ':' + details.server.port);
    console.log('traffic is forwarded to ' + details.target.family + '  ' + details.target.address + ':' + details.target.port);
});

// 'bound' means the connection to server has been made and the proxying is in action
server.on('bound', function (details) {
    console.log('proxy is bound to ' + details.route.address + ':' + details.route.port);
    console.log('peer is bound to ' + details.peer.address + ':' + details.peer.port);
});

// 'message' is emitted when the server gets a message
server.on('message', function (message, sender) {
    console.log('message from ' + sender.address + ':' + sender.port);
});

// 'proxyMsg' is emitted when the bound socket gets a message and it's send back to the peer the socket was bound to
server.on('proxyMsg', function (message, sender) {
    console.log('answer from ' + sender.address + ':' + sender.port);
});

// 'proxyClose' is emitted when the socket closes (from a timeout) without new messages
server.on('proxyClose', function (peer) {
    if (peer) console.log('disconnecting socket from ' + peer.address);
});

server.on('proxyError', function (err) {
    console.log('ProxyError! ' + err);
});

server.on('error', function (err) {
    console.log('Error! ' + err);
});