import { Request, Response } from "express";
import { DoctoradoService } from "../services/doctorado.services";

export class DoctoradoController {
	constructor(private readonly doctoradoService: DoctoradoService = new DoctoradoService()){};

// obtain all users
async getDoctorados(req: Request, res: Response){
	try {
	  const data = await this.doctoradoService.findAllDoctorados();
		res.status(200).json(data);
	} catch (e) {
		console.error(e);            
	}
}
// obtain an user by id
async getDoctoradoById(req: Request, res: Response){
	const {id} = req.params;

	try {
  		const data = await this.doctoradoService.findDoctoradoById(Number(id));
		res.status(200).json(data);
	} catch (e) {
		console.error(e);            
	}
}

//crete a new user
async createDoctorado(req: Request, res: Response){
	try {
const data = await this.doctoradoService.createDoctorado (req.body);
		res.status(200).json(data);
	} catch (e) {
		console.error(e);            
	}
}

//modify an user
async updateDoctorado(req: Request, res: Response){
	const {id} = req.params;
	try {
		const data = await this.doctoradoService.updateDoctorado(Number(id), req.body);
		res.status(200).json(data);
	} catch (e) {
		console.error(e);            
	}
}

//remove an user
async deleteDoctorado(req: Request, res: Response){
	const {id} = req.params;
	try {
		const data = await this.doctoradoService.deleteDoctorado(Number(id));
		res.status(200).json(data);
	} catch (e) {
		console.error(e);            
	}
}
  
async countDoctorados(req: Request, res: Response) {
	try {
	  const data = await this.doctoradoService.countDoctorados();
	  res.status(200).json(data);
	} catch (e) {
	  console.error(e);
	  res.status(500).json({ error: e instanceof Error ? e.message : "Error al obtener los datos" });
	}
  }

}