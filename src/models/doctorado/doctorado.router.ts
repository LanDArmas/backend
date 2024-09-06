import { DoctoradoController } from './controllers/doctorado.controller';
import { BaseRouter } from "../../shared/router/router";

export class DoctoradoRouter extends BaseRouter<DoctoradoController>{
    constructor(){
        super(DoctoradoController);
    }
    routes(): void {
        // todos los usuarios
this.router.get('/Doctorado', (req, res) => this.controller.getDoctorados(req, res));
        
// usuario por id
this.router.get('/Doctorado/:id', (req, res) => this.controller.getDoctoradoById(req, res));

        // adicionar usuario
this.router.post('/Doctorado/createDoctorado', (req, res) => this.controller.createDoctorado(req, res));
//modificar usuario
this.router.put('/Doctorado/updateDoctorado/:id', (req, res) => this.controller.updateDoctorado(req, res));

        // eliminar usuario
this.router.delete('/Doctorado/deleteDoctorado/:id', (req, res) => this.controller.deleteDoctorado(req, res));
    }
}