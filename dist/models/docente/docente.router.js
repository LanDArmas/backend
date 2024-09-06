"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocenteRouter = void 0;
const docente_controller_1 = require("./controllers/docente.controller");
const router_1 = require("../../shared/router/router");
class DocenteRouter extends router_1.BaseRouter {
    constructor() {
        super(docente_controller_1.DocenteController);
    }
    routes() {
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
exports.DocenteRouter = DocenteRouter;
