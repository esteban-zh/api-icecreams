import  mongoose  from "mongoose";
import db from "../db.js"
import { Helados } from '../models/index.js'

export const getAll = (req, res) => {
    
    db.connect();

    Helados.find((err, data) => {
        
        if (err) res.status(500).send();
        if (data.length ===0) res.status(204).send();
        res.status(200).send(data);
        res.send(data);
    });

};

export const getOne = (req, res) => {

    db.connect();

    const id= req.params.id;
    console.log("ID",id);

    Helados.findById(id, (err,data) => {
        
        if(err) res.sendStatus(404);
        res.status(200).json(data);
    });

};

export const create = (req, res) =>{

    db.connect();

    if(req.body){
        Helados.create(req.body, (err, icecream) => {
            if(err) res.sendStatus(500);
            res.status(201).json(icecream);
        });
    }
    
};

export const update = (req, res) => {
    db.connect();

    const {id } = req.params
    const icecreamNew = req.body

    Helados.findById(id, (err,icecream) => {
        if(err) res.status(500).send(err);
        Helados.updateOne(icecream , icecreamNew, (err, value) => {
            if(err) res.status(500).send(err);
            res.status(200).send(value);
        });
    }) ;
    
};

export const deleteOne = (req, res) => {
    db.connect();
    
    const {id} = req.params;
    Helados.findById(id, (err, icecream) => {
        if(err) res.status(404).send(err);
        icecream.remove((err, value) => {
            if (err) res.status(500).send(err);
            res.send(value);
        });
    });
};