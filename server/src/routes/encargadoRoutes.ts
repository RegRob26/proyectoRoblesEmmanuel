import { Router } from "express";
import { encargadoController } from "../controllers/encargadoController";


class EncargadoRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get("/", encargadoController.list);
        this.router.post("/", encargadoController.create);
        this.router.delete("/delete/:id", encargadoController.delete);
        this.router.put("/update/:id", encargadoController.update);
        this.router.post("/checkUser", encargadoController.checkEncargado);
    }
}

const encargadoRoutes = new EncargadoRoutes();
export default encargadoRoutes.router;