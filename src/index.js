const express = require("express");
const routers = require("./routes/index.js");
const app = express();
 //define port
const PORT = 4000;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//define of routes
app.use(routers);
app.listen(PORT,()=>console.log("Server listening PORT",PORT));