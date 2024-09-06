import { NoDocenteController } from './controllers/noDocente.controller';
import { BaseRouter } from "../../shared/router/router";

export class NoDocenteRouter extends BaseRouter<NoDocenteController>{
    constructor(){
        super(NoDocenteController);
    }
    routes(): void {
        // todos los usuarios
this.router.get('/NoDocente', (req, res) => this.controller.getNoDocentes(req, res));
        
// usuario por id
this.router.get('/NoDocente/:id', (req, res) => this.controller.getNoDocenteById(req, res));

        // adicionar usuario
this.router.post('/NoDocente/createNoDocente', (req, res) => this.controller.createNoDocente(req, res));
//modificar usuario
this.router.put('/NoDocente/updateNoDocente/:id', (req, res) => this.controller.updateNoDocente(req, res));

        // eliminar usuario
this.router.delete('/NoDocente/deleteNoDocente/:id', (req, res) => this.controller.deleteNoDocente(req, res));
    }
}