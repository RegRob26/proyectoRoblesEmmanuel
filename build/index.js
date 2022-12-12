"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_json_1 = __importDefault(require("./swagger.json"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const clienteRoutes_1 = __importDefault(require("./routes/clienteRoutes"));
const productoRoutes_1 = __importDefault(require("./routes/productoRoutes"));
const choferRoutes_1 = __importDefault(require("./routes/choferRoutes"));
const encargadoRoutes_1 = __importDefault(require("./routes/encargadoRoutes"));
const pedidoRoutes_1 = __importDefault(require("./routes/pedidoRoutes"));
const tipoRoutes_1 = __importDefault(require("./routes/tipoRoutes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use("/documentacion", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use("/api/cliente", clienteRoutes_1.default);
        this.app.use("/api/producto", productoRoutes_1.default);
        this.app.use("/api/chofer", choferRoutes_1.default);
        this.app.use("/api/encargado", encargadoRoutes_1.default);
        this.app.use("/api/pedido", pedidoRoutes_1.default);
        this.app.use("/api/tipo", tipoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
