import { Request, Response } from "express";
import pool from "../database";
//TODO: Agregar listOne al swagger, recien agregado


class ChoferController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT * FROM chofer";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const {id} = req.params;
        const consulta = 'SELECT * FROM chofer WHERE id = '+ id;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Chofer no encontrado'});

    }
    public async listNombre(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT id, nombre FROM chofer WHERE disponible = 1";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const resp = await pool.query("INSERT INTO chofer set ?", [req.body]);
        res.json(resp);
    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM chofer WHERE id = ${id}`);
        res.json(resp);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE chofer set ? WHERE id = ?", [
            req.body,
            id,
        ]);
        res.json(resp);
    }

    public async updateAllow(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.body);
        const resp = await pool.query(`UPDATE chofer set disponible = 1 WHERE id = ${id}`);
        res.json(resp);
    }
}

export const choferController = new ChoferController();
