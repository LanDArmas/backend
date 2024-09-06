import { Request, Response } from "express";
import { NoDocenteService } from "../services/noDocente.services";

export class NoDocenteController {
  constructor(private readonly noDocenteService: NoDocenteService = new NoDocenteService()) {}

  // Obtener todos los no docentes
  async getNoDocentes(req: Request, res: Response) {
    try {
      const data = await this.noDocenteService.findAllNoDocentes();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener los no docentes" });
    }
  }

  // Obtener un no docente por ID
  async getNoDocenteById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.noDocenteService.findNoDocenteById(Number(id));
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ error: "No docente no encontrado" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener el no docente" });
    }
  }

  // Crear un nuevo no docente
  async createNoDocente(req: Request, res: Response) {
    try {
      const data = await this.noDocenteService.createNoDocente(req.body);
      res.status(201).json(data);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al crear el no docente" });
    }
  }

  // Actualizar un no docente
  async updateNoDocente(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const updateResult = await this.noDocenteService.updateNoDocente(Number(id), req.body);
      if (updateResult.affected) {
        res.status(200).json({ message: "No docente actualizado correctamente" });
      } else {
        res.status(404).json({ error: "No docente no encontrado" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al actualizar el no docente" });
    }
  }

  // Eliminar un no docente
  async deleteNoDocente(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deleteResult = await this.noDocenteService.deleteNoDocente(Number(id));
      if (deleteResult.affected) {
        res.status(200).json({ message: "No docente eliminado correctamente" });
      } else {
        res.status(404).json({ error: "No docente no encontrado" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al eliminar el no docente" });
    }
  }
}
