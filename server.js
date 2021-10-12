// const express = require("express");

import  express  from "express";
import  {icecreamCtrl} from "./controllers/index.js";
import  {usersCtrl} from "./controllers/index.js";
import { rolesCtrl } from "./controllers/index.js";
// import { sellCtrl } from "./controllers/index.js";

import { heladosRoutes } from "./routes/index.js";
import {usersRoutes} from "./routes/index.js";
import {rolesRoutes} from "./routes/index.js";
import {sellRouter} from "./routes/index.js"

console.log('routes', heladosRoutes);
// const mongoose = require("mongoose");

//creando la app con express
const app = express();
//use json enviar desde body(postman)
app.use(express.json());

//link sell router
app.use("/api", sellRouter);

//routes icecream
app.get(heladosRoutes.GET, icecreamCtrl.getAll);
app.get(heladosRoutes.GET_ONE, icecreamCtrl.getOne);
app.post(heladosRoutes.CREATE, icecreamCtrl.create);
app.put(heladosRoutes.UPDATE, icecreamCtrl.update);
app.delete(heladosRoutes.DELETE, icecreamCtrl.deleteOne);

//routes users

app.get(usersRoutes.GET, usersCtrl.getAll);
app.get(usersRoutes.GET_ONE, usersCtrl.getOne);
app.post(usersRoutes.CREATE, usersCtrl.create);
app.put(usersRoutes.UPDATE, usersCtrl.update);
app.delete(usersRoutes.DELETE, usersCtrl.deleteOne);

//roles routes
app.get(rolesRoutes.GET, rolesCtrl.getAll);
app.get(rolesRoutes.GET_ONE, rolesCtrl.getOne);
app.post(rolesRoutes.CREATE, rolesCtrl.create);
app.put(rolesRoutes.UPDATE, rolesCtrl.update);
app.delete(rolesRoutes.DELETE, rolesCtrl.deleteOne);

//sell routes

// app.post(sellRoutes.SELL, sellCtrl.sell);
// app.route(sellRoutes.MAIN).get((req, res) => {
//     res.send("main ventas..........");
// });




//lanzar el servidor
app.listen(3004, ()=>{
    console.log("initialized server....");
});