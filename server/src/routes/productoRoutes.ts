import { Router } from "express";
import { productoController } from "../controllers/productoController";

class ProductoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get("/", productoController.list);
        this.router.get('/agrupar', productoController.agrupar);
        this.router.get("/detail", productoController.listDetail);
        this.router.get("/exist", productoController.listExist);
        this.router.post("/", productoController.create);
        this.router.delete('/delete/:id', productoController.delete);
        this.router.put('/update/:id', productoController.update)
    }
}
const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;
