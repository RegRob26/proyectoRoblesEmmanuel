import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import swagger_ui_express from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

import indexRoutes from "./routes/indexRoutes";
import clienteRoutes from "./routes/clienteRoutes";
import productoRoutes from "./routes/productoRoutes";
import choferRoutes from "./routes/choferRoutes";
import encargadoRoutes from "./routes/encargadoRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import tipoRoutes from "./routes/tipoRoutes";

class Server {
    public app: Application;
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void {
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(
            "/documentacion",
            swagger_ui_express.serve,
            swagger_ui_express.setup(swaggerDocument)
        );
    }
    routes(): void {
        this.app.use(indexRoutes);
        this.app.use("/api/cliente", clienteRoutes);
        this.app.use("/api/producto", productoRoutes);
        this.app.use("/api/chofer", choferRoutes);
        this.app.use("/api/encargado", encargadoRoutes);
        this.app.use("/api/pedido", pedidoRoutes);
        this.app.use("/api/tipo", tipoRoutes);
    }
    start(): void {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
