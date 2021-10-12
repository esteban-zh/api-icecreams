import db from "../db.js";
import { Roles } from "../models/index.js";

export const getAll = (req, res) => {

   db.connect();

   Roles.find((err, data) => {
       if(err) res.status(500).send();
       if (data.length ===0) res.status(204).send();
       console.log("find", data);
       res.status(200).json(data);

   });
};

export const getOne = (req, res) => {

     db.connect();

     const {id} = req.params;
     console.log("id", id);

     Roles.findById(id, (err, data) =>{
         if(err) res.sendStatus(404);
         res.status(200).json(data);
     });
};

export const create = (req, res) => {

    db.connect();

    if(req.body){
        Roles.create(req.body, (err, rol) => {
            if(err) res.sendStatus(500);
            res.status(201).json(rol);
        });
    };
};

export const update = (req, res) => {

    db.connect();

    const {id} = req.params;
    const rolNew = req.body;

    Roles.findById(id, (err, rol) => {
        if(err) res.status(500).send(err);
        console.log("ROL", rol);
        Roles.updateOne(rol, rolNew, (err, value) => {
            if(err) res.status(500).send(err);
            res.status(200).send(value);
            console.log("ROLNEW", rolNew);
        });
    });
};

export const deleteOne = (req, res) =>{

    db.connect();

     const {id} = req.params;
    Roles.findById(id, (err, rol) => {
        if(err) res.status(404).send(err);
        rol.remove((err, value) => {
            if (err) res.status(500).send(err);
            res.send(value);
        });
    });
};