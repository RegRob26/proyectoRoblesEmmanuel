import {Router} from "express";
import {tipoController} from "../controllers/tipoController";

class ProductoRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get("/", tipoController.list);
        this.router.post("/", tipoController.create);
        this.router.delete('/delete/:id', tipoController.delete);
        this.router.put('/update/:id', tipoController.update)
    }
}
const productoRoutes= new ProductoRoutes();
export default productoRoutes.router;
