import { Request, Response } from "express";
import pool from "../database";

class EncargadoController{
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);

        const consulta = "SELECT * FROM encargado";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }

    public async checkEncargado(req: Request, res: Response) : Promise<void>{
        console.log(req.body);
        const user = req.body.email;
        const passw = req.body.password;

        const consulta = `SELECT nombre, acceso FROM encargado WHERE email = '${user}' and password = '${passw}'`
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO encargado set ?", [req.body]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM encargado WHERE id = ${id}`);
        res.json(resp);
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE encargado set ? WHERE id = ?", [
            req.body,
            id,
        ]);
        res.json(resp);
    }

}

export const encargadoController = new EncargadoController();