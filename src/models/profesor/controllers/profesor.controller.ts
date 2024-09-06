// src/profesor/controllers/profesor.controller.ts
import { Request, Response } from "express";
import { ProfesorService } from "../services/profesor.services";

export class ProfesorController {
    constructor(private readonly profesorService: ProfesorService = new ProfesorService()) {}

    // Obtener todos los profesores
    async getProfesors(req: Request, res: Response) {
        try {
            const data = await this.profesorService.findAllProfesors();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(500).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    }

    // Obtener un profesor por ID
    async getProfesorById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const data = await this.profesorService.findProfesorById(Number(id));
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(500).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    }

    // Crear un nuevo profesor
    async createProfesor(req: Request, res: Response) {
        try {
            const data = await this.profesorService.createProfesor(req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(400).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    }

    // Modificar un profesor
    async updateProfesor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.profesorService.updateProfesor(Number(id), req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(400).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    }

    // Eliminar un profesor
    async deleteProfesor(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.profesorService.deleteProfesor(Number(id));
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(500).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Unknown error occurred" });
            }
        }
    }
}
