import { Router } from "express";
import { pedidoController } from "../controllers/pedidoController";

class PedidoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get("/", pedidoController.list);
        this.router.get("/:id", pedidoController.listOne);
        this.router.post("/", pedidoController.create);
        this.router.delete("/delete/:id", pedidoController.delete);
        this.router.put("/update/:id", pedidoController.update);
    }
}

const pedidoRoutes = new PedidoRoutes();
export default pedidoRoutes.router;