"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadRouter = void 0;
const actividad_controller_1 = require("./controllers/actividad.controller");
const router_1 = require("../../shared/router/router");
class ActividadRouter extends router_1.BaseRouter {
    constructor() {
        super(actividad_controller_1.ActividadController);
    }
    routes() {
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
exports.ActividadRouter = ActividadRouter;
