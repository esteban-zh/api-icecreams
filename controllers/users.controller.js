import db from "../db.js";
import { Users } from "../models/index.js";

export const getAll = (req, res) => {

   db.connect();

   Users.find((err, data) => {
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

     Users.findById(id, (err, data) =>{
         if(err) res.sendStatus(404);
         res.status(200).json(data);
     });
};

export const create = (req, res) => {

    db.connect();

    if(req.body){
        Users.create(req.body, (err, user) => {
            if(err) res.sendStatus(500);
            res.status(201).json(user);
        });
    };
};

export const update = (req, res) => {

    db.connect();

    const {id} = req.params;
    const userNew = req.body;

    Users.findById(id, (err, user) => {
        if(err) res.status(500).send(err);
        console.log("USER", user);
        Users.updateOne(user, userNew, (err, value) => {
            if(err) res.status(500).send(err);
            res.status(200).send(value);
            console.log("USERNEW", userNew);
        });
    });
};

export const deleteOne = (req, res) =>{

    db.connect();

     const {id} = req.params;
    Users.findById(id, (err, user) => {
        if(err) res.status(404).send(err);
        user.remove((err, value) => {
            if (err) res.status(500).send(err);
            res.send(value);
        });
    });
};