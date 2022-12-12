"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => res.send("Sistema para la gestion de clientes y pedidos de Indapura, empresa purificadora y envasadora de agua."));
        this.router.get('/check', (req, res) => res.send('connection check'));
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
