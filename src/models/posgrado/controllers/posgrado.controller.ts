import { Request, Response } from "express";
import { PosgradoService } from "../services/posgrado.services";
import { PosgradoDTO } from "../dto/posgrado.dto";

export class PosgradoController {
    constructor(
        private readonly posgradoService: PosgradoService = new PosgradoService()
    ) {}

    async getPosgrados(req: Request, res: Response) {
        try {
            console.log("sdfsfsf");
            const posgrados = await this.posgradoService.findAllPosgrados();
            res.status(200).json(posgrados);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(500).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Error desconocido al obtener los posgrados" });
            }
        }
    }

    async getPosgradoById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const posgrado = await this.posgradoService.findPosgradoById(Number(id));
            if (posgrado) {
                res.status(200).json(posgrado);
            } else {
                res.status(404).json({ error: "Posgrado no encontrado" });
            }
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(500).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Error desconocido al obtener el posgrado" });
            }
        }
    }

    async findCountByPosgrado(req: Request, res: Response): Promise<void> {
        try {
            const statistics = await this.posgradoService.findCountByPosgrado();
            res.status(200).json(statistics);
        } catch (error) {
            console.error('Error in getStatistics:', error);
            res.status(500).json({ message: 'Error retrieving statistics' });
        }
    }
    
    async findPosgradoWithActividades(req: Request, res: Response): Promise<void> {
        try {
          const id = parseInt(req.params.id, 10);
          const posgrado = await this.posgradoService.findPosgradoWithActividades(id);
          if (!posgrado) {
            res.status(404).json({ message: 'Posgrado no encontrado' });
          } else {
            res.status(200).json(posgrado);
          }
        } catch (error) {
          console.error('Error in findPosgradoWithActividades:', error);
          res.status(500).json({ message: 'Error retrieving posgrado with activities' });
        }
        
      }
    
    
    

    async createPosgrado(req: Request, res: Response) {
        try {
            const dto: PosgradoDTO = req.body;
            const data = await this.posgradoService.createPosgrado(dto);
            res.status(201).json(data);
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(400).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Error desconocido al crear el posgrado" });
            }
        }
    }

    async updatePosgrado(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const dto: PosgradoDTO = req.body;
            await this.posgradoService.updatePosgrado(Number(id), dto);
            res.status(200).json({ message: "Posgrado actualizado con éxito" });
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(400).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Error desconocido al actualizar el posgrado" });
            }
        }
    }

    async deletePosgrado(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const result = await this.posgradoService.deletePosgrado(Number(id));
            if (result.affected) {
                res.status(200).json({ message: "Posgrado eliminado con éxito" });
            } else {
                res.status(404).json({ error: "Posgrado no encontrado" });
            }
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                res.status(500).json({ error: e.message });
            } else {
                res.status(500).json({ error: "Error desconocido al eliminar el posgrado" });
            }
        }
    }
}
