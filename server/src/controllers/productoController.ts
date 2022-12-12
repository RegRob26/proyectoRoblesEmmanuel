import { Request, Response } from "express";
import pool from "../database";

class ProductoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT * FROM producto";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listExist(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT DISTINCT * FROM producto JOIN tipo ON producto.cantidad_producida > 0 and producto.productoTipo = tipo.numero_producto";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    //Nueva
    public async listDetail(req: Request, res: Response): Promise <void>{
        console.log(req.params);
        const consulta = "SELECT DISTINCT *FROM producto JOIN tipo";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);

    }

    public async agrupar(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT productoTipo, sum(cantidad_producida) as existencia from producto where cantidad_producida >=0 group by productoTipo";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO producto set ?", [req.body]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM producto WHERE id = ${id}`);
        res.json(resp);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE producto set ? WHERE id = ?", [
            req.body,
            id,
        ]);
        res.json(resp);
    }
}

export const productoController = new ProductoController();
