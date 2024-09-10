"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstudianteRouter = void 0;
const estudiante_controller_1 = require("./controllers/estudiante.controller");
const router_1 = require("../../shared/router/router");
class EstudianteRouter extends router_1.BaseRouter {
    constructor() {
        super(estudiante_controller_1.EstudianteController);
    }
    routes() {
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
        this.router.get('/Estudiante/anexoAcum', (req, res) => this.controller.countByPosgrado(req, res));
        this.router.get('/Estudiantes/count', (req, res) => this.controller.countEstudiantesByTipo(req, res));
    }
}
exports.EstudianteRouter = EstudianteRouter;
