import { Request, Response } from "express";
import { ActividadService } from "../services/actividad.services";

export class ActividadController {
    constructor(private readonly actividadService: ActividadService = new ActividadService()) {}

    // Obtener todos los Actividads
    async getActividades(req: Request, res: Response) {
        try {
            const data = await this.actividadService.findAllActividades();
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al obtener las Actividades" });
        }
    }

    // Obtener un Actividad por ID
    async getActividadById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.actividadService.findActividadById(Number(id));
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al obtener la Actividad" });
        }
    }

    // Crear un nuevo Actividad
    async createActividad(req: Request, res: Response) {
        try {
            const data = await this.actividadService.createActividad(req.body);
            res.status(201).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al crear la Actividad" });
        }
    }

    // Actualizar un Actividad
    async updateActividad(req: Request, res: Response) {
        const { id} = req.params;
        try {
            const data = await this.actividadService.updateActividad(Number(id), req.body);
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al actualizar la Actividad" });
        }
    }

    // Eliminar un Actividad
    async deleteActividad(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.actividadService.deleteActividad(Number(id));
            res.status(200).json(data);
        } catch (e) {
            console.error(e);
            res.status(500).json({ error: "Error al eliminar la Actividad" });
        }
    }
}
