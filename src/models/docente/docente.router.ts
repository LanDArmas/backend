import { DocenteController } from './controllers/docente.controller';
import { BaseRouter } from "../../shared/router/router";

export class DocenteRouter extends BaseRouter<DocenteController>{
    constructor(){
        super(DocenteController);
    }
    routes(): void {
        // todos los usuarios
this.router.get('/docente', (req, res) => this.controller.getDocentes(req, res));
        
// usuario por id
this.router.get('/docente/:id', (req, res) => this.controller.getDocenteById(req, res));

        // adicionar usuario
this.router.post('/docente/createDocente', (req, res) => this.controller.createDocente(req, res));
//modificar usuario
this.router.put('/docente/updateDocente/:id', (req, res) => this.controller.updateDocente(req, res));

        // eliminar usuario
this.router.delete('/docente/deleteDocente/:id', (req, res) => this.controller.deleteDocente(req, res));
    }
}