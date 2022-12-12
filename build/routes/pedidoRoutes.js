"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pedidoController_1 = require("../controllers/pedidoController");
class PedidoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", pedidoController_1.pedidoController.list);
        this.router.get("/:id", pedidoController_1.pedidoController.listOne);
        this.router.post("/", pedidoController_1.pedidoController.create);
        this.router.delete("/delete/:id", pedidoController_1.pedidoController.delete);
        this.router.put("/update/:id", pedidoController_1.pedidoController.update);
    }
}
const pedidoRoutes = new PedidoRoutes();
exports.default = pedidoRoutes.router;
