import { ProfesorController } from './controllers/profesor.controller';
import { BaseRouter } from "../../shared/router/router";

export class ProfesorRouter extends BaseRouter<ProfesorController>{
    constructor(){
        super(ProfesorController);
    }
    routes(): void {
        // todos los usuarios
    this.router.get('/Profesor', (req, res) => this.controller.getProfesors(req, res));
        
// usuario por id
    this.router.get('/Profesor/:id', (req, res) => this.controller.getProfesorById(req, res));

        // adicionar usuario
    this.router.post('/Profesor/createProfesor', (req, res) => this.controller.createProfesor(req, res));
//modificar usuario
    this.router.put('/Profesor/updateProfesor/:id', (req, res) => this.controller.updateProfesor(req, res));

        // eliminar usuario
    this.router.delete('/Profesor/deleteProfesor/:id', (req, res) => this.controller.deleteProfesor(req, res));
    }
}