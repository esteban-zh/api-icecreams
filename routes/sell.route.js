import  express  from "express";
import { sellCtrl } from "../controllers/index.js";

const router = express.Router();

const sellRoutes = {
    MAIN: "/sell",
    SELL: "/sell",
};

//define routes and controls to routes

router.get(sellRoutes.MAIN, (req, res) => {
    res.send("main ventas..........");
});

router.post(sellRoutes.SELL, sellCtrl.sell);

export default router;