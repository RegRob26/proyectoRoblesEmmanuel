import { Router } from "express";
import { choferController } from "../controllers/choferController";

class ChoferRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get("/", choferController.list);
        this.router.get('/nombre', choferController.listNombre);
        this.router.post("/", choferController.create);
        this.router.delete('/delete/:id', choferController.delete);
        this.router.put('/update/:id', choferController.update);
        this.router.put('/update/disponible/:id', choferController.updateAllow);
        this.router.get('/:id', choferController.listOne);
    }
}
const choferRoutes = new ChoferRoutes();
export default choferRoutes.router;
