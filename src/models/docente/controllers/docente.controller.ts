import { Request, Response } from "express";
import { DocenteService } from "../services/docente.services";

export class DocenteController {
    constructor(private readonly docenteService: DocenteService = new DocenteService()) {}

    // Obtener todos los docentes
    async getDocentes(req: Request, res: Response) {
        try {
            const data = await this.docenteService.findAllDocentes();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al obtener los docentes" });
        }
    }

    // Obtener un docente por ID
    async getDocenteById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.docenteService.findDocenteById(Number(id));
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al obtener el docente" });
        }
    }

    // Crear un nuevo docente
    async createDocente(req: Request, res: Response) {
        try {
            const data = await this.docenteService.createDocente(req.body);
            res.status(201).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al crear el docente" });
        }
    }

    // Actualizar un docente
    async updateDocente(req: Request, res: Response) {
        const { id} = req.params;
        try {
            const data = await this.docenteService.updateDocente(Number(id), req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al actualizar el docente" });
        }
    }

    // Eliminar un docente
    async deleteDocente(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.docenteService.deleteDocente(Number(id));
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al eliminar el docente" });
        }
    }
}
