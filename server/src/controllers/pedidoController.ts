import { Request, Response } from "express";
import pool from "../database";
//TODO: Agregar listOne al swagger, recien agregado

class PedidoController {
    public async list(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const consulta = "SELECT * FROM pedido";
        console.log(consulta);
        const respuesta = await pool.query(consulta);
        console.log(respuesta);
        res.json(respuesta);
    }

    public async listOne(req: Request, res: Response): Promise<void> {
        console.log(req.params);
        const {id} = req.params;
        const consulta = 'SELECT * FROM pedido WHERE id = '+ id;
        console.log(consulta)
        const respuesta = await pool.query(consulta);
        if(respuesta.length>0){
        res.json(respuesta[0]);
        return ;
        }
        res.status(404).json({'mensaje': 'Chofer no encontrado'});

    }
    public async create(req: Request, res: Response): Promise<void> {
        try {
            console.log(req.body);
            const resp = await pool.query("INSERT INTO pedido set ?", [req.body]);
            console.log(resp);
            res.json(resp);
        }
        catch (e) {
            console.log("El pedido no se pudo realizar, revise las entradas");
            res.json([]);
        }

    }
    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const resp = await pool.query(`DELETE FROM pedido WHERE id = ${id}`);
        res.json(resp);
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        console.log(req.params);
        const resp = await pool.query("UPDATE pedido set ? WHERE id = ?", [
            req.body,
            id,
        ]);
        res.json(resp);
    }
}

export const pedidoController = new PedidoController();
