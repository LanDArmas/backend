import { ActividadController } from './controllers/actividad.controller';
import { BaseRouter } from "../../shared/router/router";

export class ActividadRouter extends BaseRouter<ActividadController>{
    constructor(){
        super(ActividadController);
    }
    routes(): void {
        // todos los usuarios
this.router.get('/Actividad', (req, res) => this.controller.getActividades(req, res));
        
// usuario por id
this.router.get('/Actividad/:id', (req, res) => this.controller.getActividadById(req, res));

        // adicionar usuario
this.router.post('/Actividad/createActividad', (req, res) => this.controller.createActividad(req, res));
//modificar usuario
this.router.put('/Actividad/updateActividad/:id', (req, res) => this.controller.updateActividad(req, res));

        // eliminar usuario
this.router.delete('/Actividad/deleteActividad/:id', (req, res) => this.controller.deleteActividad(req, res));
    }
}