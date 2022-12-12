"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
class ProductoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", productoController_1.productoController.list);
        this.router.get('/agrupar', productoController_1.productoController.agrupar);
        this.router.get("/detail", productoController_1.productoController.listDetail);
        this.router.get("/exist", productoController_1.productoController.listExist);
        this.router.post("/", productoController_1.productoController.create);
        this.router.delete('/delete/:id', productoController_1.productoController.delete);
        this.router.put('/update/:id', productoController_1.productoController.update);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
