import { Router } from "express";
import { clienteController } from "../controllers/clienteController";

class ClienteRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get("/", clienteController.list);
        this.router.get('/nombre', clienteController.listNombre)
        this.router.get('/:id', clienteController.listOne)
        this.router.post("/", clienteController.create);
        this.router.delete('/delete/:id', clienteController.delete);
        this.router.put('/update/:id', clienteController.update)
    }
}
const clienteRoutes = new ClienteRoutes();
export default clienteRoutes.router;
