import  mongoose  from "mongoose";

const schema = {
    nombre: String,
    descripcion: String,
    id_rol: Number,
};

export const Roles = mongoose.model("Roles", schema, "rol");