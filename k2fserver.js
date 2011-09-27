var httpServer = require("./httpserver.js"),
    router = require("./router.js"),
    handlers = require("./handlers.js");

var handle = {};
handle['/'] = handlers.start;
handle['/start'] = handlers.start;
handle['/upload'] = handlers.upload;
handle['/show'] = handlers.show;

httpServer.start(process.argv[2], process.argv[3], router.route, handle);
