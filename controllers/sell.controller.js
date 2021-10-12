import db from "../db.js";
import { Helados } from "../models/index.js";
import { Sells } from "../models/sell.js";
import { SoldIcecreams } from "../models/soldIcecreams.js";

export const sell = (req, res) => {

    db.connect();

    console.log("body", req.body);

    const { id_helado: id, cantidad_comprar: quantity} = req.body;

    //find icecream
    Helados.findById(id, (err, data) => {
        console.log("data", data);
        if (data) {
            const { precio: price} = data;
            const priceTosell = quantity * price;
            //create a sell
            const sell = new Sells({
                fecha: Date.now(),
                valor: priceTosell,
            });
            sell.save((err, value) => {
                console.log("venta", value, err);
                //IF CREATED SELL
                if (value) {
                    //create detail of sell
                    const { _id: idSell} = value;
                    console.log("id venta", idSell);

                    SoldIcecreams.create(
                        {
                        cantidad : quantity,
                        id_helado: id,
                        id_venta: idSell,
                        precio: priceTosell,
                    }, 
                    (err, data) => {
                        console.log("helado creado", data);
                        if (data)res.status(200).json({ok:true});
                        else{
                            //revert sell
                            value.remove((err, sellRemoved) => {
                                if(sellRemoved) res.status(500).send("hubo erro al crear la venta");
                            });
                            res.status(500).send(err);
                        }                       
                    }
                    );
                }
            });
        }
        else{
            res.status(500).send(err)
        }
    });
};