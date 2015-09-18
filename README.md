# paramid
Parallelizes middleware.

# usage
Use all the middleware you normally would with express, then tell express to use paramid.

var paramid = require("../paramid");
paramid.use(middlewareFn1);
paramid.use(middlewareFn2);
app.use(paramid);
