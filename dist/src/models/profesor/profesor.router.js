"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorRouter = void 0;
const profesor_controller_1 = require("./controllers/profesor.controller");
const router_1 = require("../../shared/router/router");
class ProfesorRouter extends router_1.BaseRouter {
    constructor() {
        super(profesor_controller_1.ProfesorController);
    }
    routes() {
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
exports.ProfesorRouter = ProfesorRouter;
