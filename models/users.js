import  mongoose  from "mongoose";

const schema = {
    nombre: String,
    apellido: String,
    email: String,
    password: String,
    estado: String,
    id: Number,
    id_rol:Number,
};

export const Users = mongoose.model("usuarios", schema)