"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encargadoController_1 = require("../controllers/encargadoController");
class EncargadoRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", encargadoController_1.encargadoController.list);
        this.router.post("/", encargadoController_1.encargadoController.create);
        this.router.delete("/delete/:id", encargadoController_1.encargadoController.delete);
        this.router.put("/update/:id", encargadoController_1.encargadoController.update);
        this.router.post("/checkUser", encargadoController_1.encargadoController.checkEncargado);
    }
}
const encargadoRoutes = new EncargadoRoutes();
exports.default = encargadoRoutes.router;
