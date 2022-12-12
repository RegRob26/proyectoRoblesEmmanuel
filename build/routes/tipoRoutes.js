"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipoController_1 = require("../controllers/tipoController");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", tipoController_1.tipoController.list);
        this.router.post("/", tipoController_1.tipoController.create);
        this.router.delete('/delete/:id', tipoController_1.tipoController.delete);
        this.router.put('/update/:id', tipoController_1.tipoController.update);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
