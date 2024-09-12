import { EstudianteController } from './controllers/estudiante.controller';
import { BaseRouter } from "../../shared/router/router";

export class EstudianteRouter extends BaseRouter<EstudianteController>{
    constructor(){
        super(EstudianteController);
    }
    routes(): void {
        // todos los usuarios
this.router.get('/Estudiante', (req, res) => this.controller.getEstudiantes(req, res));
        
// usuario por id
this.router.get('/Estudiante/:id', (req, res) => this.controller.getEstudianteById(req, res));

        // adicionar usuario
this.router.post('/Estudiante/createEstudiante', (req, res) => this.controller.createEstudiante(req, res));
//modificar usuario
this.router.put('/Estudiante/updateEstudiante/:id', (req, res) => this.controller.updateEstudiante(req, res));

        // eliminar usuario
this.router.delete('/Estudiante/deleteEstudiante/:id', (req, res) => this.controller.deleteEstudiante(req, res));
this.router.get('/Estudiante/baseNom/:id', (req, res) => this.controller.getEstudianteByIdPosgrado(req, res));
//this.router.get('/Estudiante/anexoAcum', (req, res) => this.controller.countByPosgrado(req, res));
//this.router.get('/Estudiantes/count', (req, res) => this.controller.countEstudiantesByTipo(req, res));

    }
}