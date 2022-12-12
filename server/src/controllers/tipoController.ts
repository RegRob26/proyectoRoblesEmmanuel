import { Request, Response } from "express";
import pool from "../database";

class TipoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT * FROM tipo";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO tipo set ?", [req.body]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM tipo WHERE id = ${id}`);
        res.json(resp);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE tipo set ? WHERE id = ?", [
            req.body,
            id,
        ]);
        res.json(resp);
    }
}

export const tipoController = new TipoController();
