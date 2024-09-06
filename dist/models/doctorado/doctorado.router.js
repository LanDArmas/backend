"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctoradoRouter = void 0;
const doctorado_controller_1 = require("./controllers/doctorado.controller");
const router_1 = require("../../shared/router/router");
class DoctoradoRouter extends router_1.BaseRouter {
    constructor() {
        super(doctorado_controller_1.DoctoradoController);
    }
    routes() {
        // todos los usuarios
        this.router.get('/Doctorado', (req, res) => this.controller.getDoctorados(req, res));
        // usuario por id
        this.router.get('/Doctorado/:id', (req, res) => this.controller.getDoctoradoById(req, res));
        // adicionar usuario
        this.router.post('/Doctorado/createDoctorado', (req, res) => this.controller.createDoctorado(req, res));
        //modificar usuario
        this.router.put('/Doctorado/updateDoctorado/:id', (req, res) => this.controller.updateDoctorado(req, res));
        // eliminar usuario
        this.router.delete('/Doctorado/deleteDoctorado/:id', (req, res) => this.controller.deleteDoctorado(req, res));
    }
}
exports.DoctoradoRouter = DoctoradoRouter;
