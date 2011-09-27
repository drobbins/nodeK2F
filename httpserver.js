var http = require('http');

function start(port, ip, route, handle){
  var port =  port || 8080,
      ip = ip || "127.0.0.1";

  function onRequest(request, response) {
    route(handle, request, response);
  }

  var server = http.createServer(onRequest).listen(port, ip);
  console.log('Server running at http://'+ip+':'+port+'/');
}

exports.start = start;
