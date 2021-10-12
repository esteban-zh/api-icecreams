import mongoose  from "mongoose";

const schema = {
    fecha: Date,
    valor: Number,
}

export const Sells = mongoose.model("ventas", schema);

