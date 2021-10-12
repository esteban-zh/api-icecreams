import  mongoose  from "mongoose";

const schema = {
    nombre:String,
    sabor:String,
    precio:Number,
    id_helado: Number
};

export const Helados = mongoose.model("helados", schema)