"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const choferController_1 = require("../controllers/choferController");
class ChoferRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", choferController_1.choferController.list);
        this.router.get('/nombre', choferController_1.choferController.listNombre);
        this.router.post("/", choferController_1.choferController.create);
        this.router.delete('/delete/:id', choferController_1.choferController.delete);
        this.router.put('/update/:id', choferController_1.choferController.update);
        this.router.put('/update/disponible/:id', choferController_1.choferController.updateAllow);
        this.router.get('/:id', choferController_1.choferController.listOne);
    }
}
const choferRoutes = new ChoferRoutes();
exports.default = choferRoutes.router;
