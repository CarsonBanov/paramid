# paramid
Parallelizes middleware.

# usage
Use all the middleware you normally would with express, then tell express to use paramid.

``` javascript
var express = require("express");
var paramid = require("../paramid");
var app = express();

paramid.use(middlewareFn1);
paramid.use(middlewareFn2);

app.use(paramid);
```
