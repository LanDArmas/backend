import { Request, Response } from "express";
import { EstudianteService } from "../services/estudiante.services";

export class EstudianteController {
  constructor(
    private readonly estudianteService: EstudianteService = new EstudianteService()
  ) {}

  async getEstudiantes(req: Request, res: Response) {
    try {
      const estudiantes = await this.estudianteService.findAllEstudiantes();
      res.status(200).json(estudiantes);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener los estudiantes" });
    }
  }

  async getEstudianteById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const estudiante = await this.estudianteService.findEstudianteById(Number(id));
      if (estudiante) {
        res.status(200).json(estudiante);
      } else {
        res.status(404).json({ error: "Estudiante no encontrado" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener el estudiante" });
    }
  }

  async getEstudianteByIdPosgrado(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const estudiantes = await this.estudianteService.findEstudiantesByPosgradoId(Number(id));
      if (estudiantes) {
        res.status(200).json(estudiantes);
      } else {
        res.status(404).json({ error: "Estudiantes no encontrados" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Error al obtener a los estudiantes" });
    }
  }

  async createEstudiante(req: Request, res: Response) {
    try {
      const data = await this.estudianteService.createEstudiante(req.body);
      res.status(201).json(data);
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: e instanceof Error ? e.message : "Error al crear el estudiante" });
    }
  }

  async updateEstudiante(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.estudianteService.updateEstudiante(Number(id), req.body);
      if (data.affected) {
        res.status(200).json({ message: "Estudiante actualizado con éxito" });
      } else {
        res.status(404).json({ error: "Estudiante no encontrado" });
      }
    } catch (e) {
      console.error(e);
      res.status(400).json({ error: e instanceof Error ? e.message : "Error al actualizar el estudiante" });
    }
  }

  async deleteEstudiante(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.estudianteService.deleteEstudiante(Number(id));
      if (data.affected) {
        res.status(200).json({ message: "Estudiante eliminado con éxito" });
      } else {
        res.status(404).json({ error: "Estudiante no encontrado" });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e instanceof Error ? e.message : "Error al eliminar el estudiante" });
    }
  }

  async countByPosgrado(req: Request, res: Response) {
    try {
    
      const data = await this.estudianteService.findCountByPosgrado();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e instanceof Error ? e.message : "Error al obtener los datos" });
    }
  }
  async countEstudiantesByTipo(req: Request, res: Response) {
    try {
      const data = await this.estudianteService.countEstudiantesByTipo();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: e instanceof Error ? e.message : "Error al obtener los datos" });
    }
  }
  
}
