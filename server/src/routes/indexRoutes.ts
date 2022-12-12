import { Router } from "express";

class IndexRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }
  config(): void {
    this.router.get("/", (req, res) => res.send("Sistema para la gestion de clientes y pedidos de Indapura, empresa purificadora y envasadora de agua."));
    this.router.get('/check', (req, res) => res.send('connection check') );
  }
}
const indexRoutes = new IndexRoutes();
export default indexRoutes.router;
