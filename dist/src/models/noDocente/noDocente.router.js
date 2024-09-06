"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoDocenteRouter = void 0;
const noDocente_controller_1 = require("./controllers/noDocente.controller");
const router_1 = require("../../shared/router/router");
class NoDocenteRouter extends router_1.BaseRouter {
    constructor() {
        super(noDocente_controller_1.NoDocenteController);
    }
    routes() {
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
exports.NoDocenteRouter = NoDocenteRouter;
