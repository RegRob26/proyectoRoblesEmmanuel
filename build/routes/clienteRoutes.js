"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const clienteController_1 = require("../controllers/clienteController");
class ClienteRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", clienteController_1.clienteController.list);
        this.router.get('/nombre', clienteController_1.clienteController.listNombre);
        this.router.get('/:id', clienteController_1.clienteController.listOne);
        this.router.post("/", clienteController_1.clienteController.create);
        this.router.delete('/delete/:id', clienteController_1.clienteController.delete);
        this.router.put('/update/:id', clienteController_1.clienteController.update);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
