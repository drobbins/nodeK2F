var url = require('url');

function route(handle, request, response){
  var pathname = url.parse(request.url).pathname;
  //console.log("Routing: "+pathname);
  if (typeof handle[pathname] === 'function'){
    handle[pathname](request, response);
  }
  else{
    console.error("No request handler for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
